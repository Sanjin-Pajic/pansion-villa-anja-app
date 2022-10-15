import React from "react";
import "./Posts.css";
import PostCard from "../PostCard/PostCard";

export default function Posts() {
  return (
    <div className="posts-wrapper">
      <div className="posts">
          <p className="posts-title">
            <span className="posts-highlighted-word">Latest</span> posts
          </p>
        <div className="posts-post-cards">
          <PostCard
            postCardImg="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/197590082_488600472407591_1557535308315794474_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sgLgoRlyPtgAX-diyee&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT9Wf4_ZUyi-Wf85QKnooKMksWHNLB8VFQpAvbhXJln1CQ&oe=63702D43"
            postCardDate="15 OCT 2022"
            postCardTitle="Sample title 1"
            postCardText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque ..."
          />
          <PostCard
            postCardImg="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/146139126_417366589530980_7356437639196365688_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A8z4X0jGUlIAX-kz65-&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT_dTa7h93k_09DKnh-wbCL7Dmj-L528tAB3VSV-SlcDKA&oe=6372385F"
            postCardDate="15 OCT 2022"
            postCardTitle="Sample title 2"
            postCardText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque ..."
          />
          <PostCard
            postCardImg="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/71496933_144233913510917_7256392305093902336_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WMOneMEwXyMAX9Nhypu&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT9PnYw_soEQDOm4AoQ8StaEznDngZFzJv6VwM1GqcXafg&oe=63709EF6"
            postCardDate="15 OCT 2022"
            postCardTitle="Sample title 3"
            postCardText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque ..."
          />
        </div>
      </div>
    </div>
  );
}
