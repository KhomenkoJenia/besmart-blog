"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WelcomePage() {
  const { scrollY } = useScroll();

  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );

  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.4]);

  return (
    <>
      <div id="welcome-header">
        <motion.div
          id="welcome-header-content"
          style={{ scale: scaleText, y: yText }}
        >
          <button></button>
          <h1>Practical Applications of AI in Everyday Educational Settings</h1>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}
          src="/assets/bacrgroundf.png"
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
      </div>
      <main id="welcome-content">
        <section>
          <p>
            Today, AI is not a futuristic idea but a genuine part of education
            as our digital world changes fast. AI is changing how we teach and
            learn. It's a big advancement. It is reshaping traditional methods.
            AI stands out as a significant catalyst in this transformation. AI
            personalizes learning and makes administrative tasks easier. These
            changes were once hard to imagine.
          </p>
          <p>
            Traditionally, standardized curricula and one-size-fits-all teaching
            approaches have characterized education. Today's students have
            diverse needs and learning styles. Thus, education must be more
            personalized and adaptable to meet these requirements. This is where
            AI comes into play. AI assists educators in personalizing learning
            experiences. It achieves this through the use of machine learning
            algorithms and data analytics. This means tailoring learning to fit
            each student's strengths, weaknesses, and preferences.
          </p>
          <p>
            Moreover, AI is not confined to the classroom. It helps with school
            administrative tasks, making them more efficient and effective. AI
            simplifies administrative tasks like grading and predicting student
            performance. This frees up educators to concentrate on personalized
            teaching and supporting students.
          </p>
          <p>
            This article talks about AI in typical classrooms. It explains how
            AI alters teaching methods and student learning. We use the
            Education Hub's guide to understand how schools use artificial
            intelligence. The guide helps us learn about AI in schools. This
            helps us explore different ways we use AI in education and what it
            means for the future of learning.
          </p>
        </section>

        <section>
          <h2>AI-Powered Personalized Learning</h2>
          <p>
            In traditional classrooms, educators have a challenging job. They
            must cater to the different needs and learning styles of students.
            Yet, this challenge is being met head-on with AI-powered
            personalised learning systems. Adaptive learning platforms use AI
            algorithms. These algorithms analyze how each student learns and
            what they prefer. Based on this analysis, educators can adjust the
            content and pace of learning. This tailoring is done to meet the
            unique needs of each student. These platforms provide customized
            learning paths. They make sure students receive personalized
            instruction and help. This helps boost their engagement and
            understanding.
          </p>

          <div className="content-box">
            <img
              src="/assets/Bacground.jpg"
              alt="A city skyline touched by sunlight"
            />
            <p>
              Moreover, AI-driven interactive learning experiences offer
              students hands-on exploration and experimentation opportunities.
              Students can take part in learning using simulations, virtual
              labs, and gamified tasks. These methods help make concepts easier
              to grasp and relate to. Teachers can use AI to make learning
              environments more engaging. This fosters students' curiosity,
              creativity, and critical thinking skills. It enhances their
              learning activities.
            </p>
          </div>
          <p>
            Moreover, AI-driven interactive learning experiences offer students
            hands-on exploration and experimentation opportunities. Students can
            take part in learning using simulations, virtual labs, and gamified
            tasks. These methods help make concepts easier to grasp and relate
            to. Teachers can use AI to make learning environments more engaging.
            This fosters students' curiosity, creativity, and critical thinking
            skills. It enhances their learning activities.
          </p>
        </section>

        <section>
          <h2>Intelligent Tutoring Systems</h2>
          <p>
            AI in education shows great potential, especially in creating
            intelligent tutoring systems (ITS). Virtual teaching assistants use
            machine learning algorithms. They give personalized guidance and
            feedback to students. In regular classrooms, teachers often can't
            give each student personal help. But, with ITS, students get
            immediate support to help them stick to their learning targets.
          </p>
          <p>
            Assessing student performance is essential with an ITS. It helps
            identify areas where they might need extra help. These systems
            analyze student performance and engagement data. They identify
            learning gaps and offer specific help. This helps aid students in
            overcoming obstacles and succeeding academically.
          </p>
          <div>
            <img
              src="/assets/secondAi.png"
              alt="A city skyline touched by sunlight"
            />
            <img
              src="/assets/thirdAi.png"
              alt="A city skyline touched by sunlight"
            />
          </div>
        </section>
        <section id="about">
          <h2>AI-Enhanced Administrative Tasks</h2>
          <p>
            AI also transforming how administrative tasks are done in schools
            and colleges. AI-powered grading systems make grading easier for
            teachers. This lets teachers spend more time interacting
            meaningfully with students. Automated grading systems remove the
            manual grading workload from teachers. They also offer students
            quicker feedback, making learning more efficient.
          </p>
          <p>
            Furthermore, AI-driven predictive analytics offer valuable student
            performance and behaviour insights. This helps teachers spot
            students who may be struggling and take action early. Educators use
            predictive analytics to customize student interventions. They
            analyze attendance, grades, and engagement data for this purpose.
            This process aims to enhance retention rates and academic
            achievements.
          </p>
        </section>
        <section>
          <h2>AI Writing Tools in Education</h2>
          <p>
            Good writing skills are crucial for success in school and work
            today. Such tools, like ai writers, help students improve their
            writing. These tools are valuable for boosting writing skills. These
            tools use algorithms for natural language processing. They analyze
            topics and create well-structured essays covering a wide range of
            subjects. AI writing assistants give students immediate feedback on
            their writing. This feedback helps improve writing skills, fosters
            critical thinking, and upholds academic integrity.
          </p>
          <p>
            Students can improve their writing skills by using AI essay writing
            tools. These tools also make writing easier. These tools motivate
            students to explore different subjects and viewpoints. They help
            develop creativity and curiosity about ideas. AI essay writing tools
            help students improve their writing skills and succeed academically.
          </p>
        </section>
        <section id="advantages">
          <h2>Augmented Reality and Virtual Reality in Education</h2>
          <p>
            AR and VR technologies are changing education, too. They offer
            immersive learning experiences beyond what traditional classrooms
            can provide. AR apps enhance learning by merging digital content
            with the real world. They animate abstract concepts, making learning
            more engaging. This engagement makes learning more exciting and
            understandable. Students can use virtual environments to explore
            historical landmarks. They can also dissect virtual specimens in
            biology classes. This helps them better understand complex topics.
          </p>
          <p>
            VR technologies allow students to enter simulated environments. In
            these environments, they can engage in hands-on learning
            experiences. Students use virtual reality for immersive learning
            adventures. They can explore Mars or perform experiments in a
            virtual chemistry lab. VR sparks curiosity and creativity, making
            learning dynamic and immersive. Educators can use AR and VR
            technology. They can create diverse learning environments to meet
            the needs and interests of modern learners. These environments are
            rich and multidimensional.
          </p>
        </section>
        <section>
          <h2>Natural Language Processing for Educational Purposes</h2>
          <p>
            NLP technologies are changing how we learn languages. They give
            students personalized help and feedback. AI platforms for
            conversations use NLP algorithms. They help students practice
            speaking and listening in a foreign language. Students interact with
            virtual tutors in dialogues. These platforms analyze how you speak
            and give instant feedback. They help you get better at languages in
            a friendly way.
          </p>
          <p>
            Students receive personalized feedback on their writing tasks
            through NLP-based writing helpers. This helps them improve their
            writing abilities and communicate better. AI-powered writing
            assistants analyze grammar, syntax, and style. They pinpoint areas
            needing improvement and offer actionable suggestions. This helps
            students gain confidence and improve their writing skills.
          </p>
        </section>
        <section>
          <h2>AI for Special Education and Inclusive Learning</h2>
          <p>
            Modern educational systems focus on inclusive education. AI
            technologies can help diverse learners. AI-powered tools help
            students with disabilities by offering customized help. These tools
            include apps for text-to-speech and speech-to-text. So, they tailor
            help to fit each person's needs, making it easier for everyone to
            access. These tools let them access educational content and join in
            classroom activities.
          </p>
          <p>
            AI-powered personalized learning platforms adjust to each learner's
            needs and preferences. They provide customized instruction and
            support based on each individual's strengths and weaknesses. With
            AI-driven inclusive practices, educators can empower themselves to
            create learning environments. These environments celebrate
            diversity, promoting equity and accessibility for all students.
          </p>
          <p>
            AI's use in everyday education transforms how we teach and learn. AI
            technologies can improve education by offering personalized learning
            and intelligent tutoring systems. These advancements enhance
            engagement, boost outcomes, and foster inclusivity. We can help
            students excel in the digital age. This involves utilizing AI
            innovations and addressing ethical concerns. We can create learning
            environments that support their growth. As we explore AI's role in
            education, we discover endless opportunities for innovation. These
            shape the future of learning for generations to come.
          </p>
          <div>
            <img
              src="/assets/fourAi.png"
              alt="A city skyline touched by sunlight"
            />
            <img
              src="/assets/fiveAi.png"
              alt="A city skyline touched by sunlight"
            />
          </div>
        </section>
      </main>
    </>
  );
}
