import React from 'react';
import './MyComponent.css';
import SubscribeButton from './SubscribeButton';
import HowWorksButton  from './HowWorksButton';
import BackToTopButton from './BackToTopButton';

const MyComponent = () => {
  return (
    <div className="my-component">
      
      <p className = 'paragraph-one'>Welcome to our music streaming platform! We believe in the power of music and its ability to bring people together. That's why we're excited to offer you a new and unique way to experience your favorite songs.

With our app, you can not only listen to your favorite beats but also earn money by doing so! Whether you're a music enthusiast, a casual listener, or an artist looking to promote your own work, our platform is designed to reward you for listening to music. With our app, you can also help emerging artists reach new audiences by giving feedback on their songs.</p>

    <p className = 'paragraph-two'>Furthermore, for the music creators, we offer an opportunity to reach targeted listeners and get valuable feedback from them. By paying a small fee, independent artists and emerging bands can reach a targeted audience and get honest feedback on their music.

So why not give it a try? Search for your favorite songs, create playlists, and earn cash while you listen. You can also help the music creators by providing valuable feedback and help them grow their audience.

  </p>

<p className = 'paragraph-two'>At the moment, we are asking people to subscribe for free and enter our list of users. Once the application is finished, subscribed people will get an email. So, what are you waiting for? Subscribe as a listener or as an artist while there's still time!
Thank you for choosing our platform!
</p >
<div class = 'button-container'>
  
<SubscribeButton />
<p className='text-between-buttons'> or take a look at</p>
<HowWorksButton />

</div>
<div className='how-it-works-div'>
  <p className = 'hiw-h1' id = 'how-it-works-p1'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    HOW DOES IT WORK</p>
<p className='how-it-works-p1'>


Songfully is all about transparency!

If you're a music producer, singer, beat maker, or involved in anything music-related, Songfully provides an incredible opportunity to connect with your desired audience. Our pricing details are coming soon, but rest assured, they will be budget-friendly.

For just a few dollars, you can reach dozens of listeners, subscribers, and receive valuable feedback. We have an array of exciting features in the pipeline, so stay tuned and join us for free today!
</p>
<p className='how-it-works-p2'>
On the flip side, if you're a passionate music enthusiast, you can register as a listener. At Songfully, you get rewarded for your love of music. Get paid for listening to tunes, beats, and songs from emerging producers, and share your valuable feedback.

Once again, we believe in complete transparency. Join us for free today and get ready to embark on a musical journey like no other!
</p>
<BackToTopButton/>
</div>
    </div>


  );
};

export default MyComponent;
