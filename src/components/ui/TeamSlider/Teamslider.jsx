import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { id: 1, name: "Alexander Carter", role: "Head of Idea", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 2, name: "Danielle Sullivan", role: "Art Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 3, name: "Frederick Lason", role: "Tech Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 4, name: "Fiona Caldwell", role: "UX Designer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 5, name: "Erik Jensen", role: "Marketing", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop" },
];

const TeamSlider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Get the actual scrollable width of the internal content
      const totalWidth = sectionRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const scrollAmount = totalWidth - windowWidth;

      gsap.to(sectionRef.current, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${scrollAmount}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="team-section" ref={triggerRef}>
      <div className="scroll-wrapper">
        {/* Everything to be moved horizontally MUST be inside this div */}
        <div ref={sectionRef} className="content-container">
          
          <div className="intro-block">
            <h2 className="title">Our Creative<br />Team Members</h2>
            <p className="subtitle">
              We bring together the best minds to create stunning digital experiences.
            </p>
          </div>

          <div className="cards-wrapper">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -10 }}
                className="member-card"
              >
                <div className="image-container">
                  <img src={member.img} alt={member.name} className="member-image" loading="lazy" />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSlider;