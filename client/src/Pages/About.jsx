const About = () => {
    return (
      <main>
        <div className="w-screen h-screen bg-gradient-to-r from-orange-500 to-rose-600">
          <div className="w-screen flex items-center">
            <h1 className="text-4xl font-bold mb-6 mt-6 ml-[12.5%] text-white">
              About Me
            </h1>
          </div>
  
          <div className="flex justify-center bg-gradient-to-r from-[#fdfdfd] to-[#fcf9f3] w-[100%] h-[100%]">
            <section className="w-4/5 mt-[5%]">
              <h2 className="text-2xl text-gray-900 font-bold mb-2">Bio</h2>
              <p className="text-gray-900">
                Hello! My name is Landon Kimber! I am 21 years old and from Ogden,
                Utah. I was born and raised in Ogden and have lived here my entire
                life so naturally I came to love every corner of the city and
                every acre of the country surrounding it. I graduated from Ogden
                High School, as the president of the National Honors Society and
                lettering in basketball. After high school, I finished my general
                associates degree with Weber State University and am currently
                enrolled in University of Utah's EdEx coding bootcamp. I really
                enjoy coding and the challenge and problem solving that comes with
                it! When I have freetime away from school and work, being from
                Utah, I very much enjoy being outdoors and everything that comes
                with it. Some of my favorite hobbies outdoors include, hiking,
                fly-fishing, skiing, backpacking, camping, and anything else
                that'll let me breathe the cold fresh mountain air. Aside's from
                outdoors, I do also very much enjoy watching the NBA, playing
                video games, but most of all, sleeping! Please take a look around
                this site for references for my current work and progress within
                the beautiful world of web development!
              </p>
  
              <h2 className="text-2xl text-gray-900 font-bold mb-2 mt-[3%]">
                Experience
              </h2>
              <p className="text-gray-900">
                While my experience is limited, having never worked in the tech
                industry, I did graduate from the University of Utah fuhll stack
                web development bootcamp. I have learned a lot about coding and
                web development in the past 6 months and am excited to continue
                learning and growing in the field. Through the bootcamp, I have
                experience with HTML, CSS, JavaScript, Node.js, Express.js, MySQL,
                MongoDB, React, and other technologies. I have also learned a lot
                about working with others and collaborating on projects. I am
                excited to continue learning and growing in the field and am
                excited to see where my career takes me!
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  };
  
  export default About;