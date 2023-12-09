'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Likes from './likes';
import { useEffect, useOptimistic } from 'react';
import { useRouter } from 'next/navigation';

export default function Tweets({ tweets }: { tweets: TweetWithAuthor[] }) {
  const [optimisticTweets, addOptimisticTweet] = useOptimistic<
    TweetWithAuthor[],
    TweetWithAuthor
  >(tweets, (currentOptimisticTweets, newTweet) => {
    const newOptimisticTweets = [...currentOptimisticTweets];
    const index = newOptimisticTweets.findIndex(
      (tweet) => tweet.id === newTweet.id,
    );
    newOptimisticTweets[index] = newTweet;
    return newOptimisticTweets;
  });

  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const channel = supabase
      .channel('realtime tweets')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'tweets',
        },
        (payload) => {
          router.refresh();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [router, supabase]);

  return optimisticTweets.map((tweet) => (
    <div key={tweet.id}>
      <p>{tweet.author.username}</p>
      <p>{tweet.title}</p>
      <Likes tweet={tweet} addOptimisticTweet={addOptimisticTweet} />
    </div>
  ));
}
