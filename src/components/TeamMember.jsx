import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TeamMeber.css';

gsap.registerPlugin(ScrollTrigger);

function TeamMember() {
    const mainRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Clean fade for the heading
            gsap.from(".section-heading", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-heading",
                    start: "top 85%", 
                    toggleActions: "play none none reverse",
                }
            });

            // Clean fade for cards with stagger
            gsap.from(".team-card", {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".team-card-container",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const team = [
        { name: "Alex Rivera", role: "UI Designer", img: "https://html.rrdevs.net/runok/assets/img/new-update-2/team-14-04.jpg" },
        { name: "Jordan Smith", role: "Lead Dev", img: "https://i.pravatar.cc/300?u=2" },
        { name: "Taylor Reed", role: "Manager", img: "https://i.pravatar.cc/300?u=3" }
    ];

    return (
        <section className="team-member " ref={mainRef}>
            <div className="container">
                {/* Header using simple text alignment */}
                <div className="section-heading text-center mb-5">
                    <p className="sub-heading-center">The Professionals</p>
                    <h2 className="display-4 fw-bold text-white">Meet Our Team</h2>
                </div>

                {/* Pure CSS Grid Container */}
                <div className="team-card-container">
                    {team.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="card-image-wrapper">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="card-content">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamMember;