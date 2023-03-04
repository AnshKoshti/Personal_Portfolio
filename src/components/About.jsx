import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-fill h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          error alias quibusdam consectetur odio voluptate quasi ea consequatur
          laborum ipsa labore tenetur quo optio autem eum, mollitia quod nam.
          Aliquam nostrum illum unde explicabo fugit vel cupiditate saepe
          repudiandae. Officiis reprehenderit impedit corporis ipsam tempora
          atque, nobis quod sed consectetur!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          aspernatur veniam modi quam, accusantium blanditiis culpa incidunt
          voluptatem assumenda omnis. Exercitationem veritatis harum rem quasi,
          fugiat a modi eius adipisci sequi! Harum necessitatibus, eligendi
          repudiandae quod doloremque dolores expedita totam. Sequi repellat
          voluptatum consectetur, aspernatur doloremque enim illum! Aliquam,
          praesentium.
        </p>
      </div>
    </div>
  );
};

export default About;
