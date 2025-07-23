"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Intro() {
    useGSAP(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power1.inOut" } });
        timeline
            .to(".intro__bit", {
                yPercent: 100,
                duration: 0.5,
                stagger: 0.25,
            })
            .to(
                ".intro__welcome-message__welcome-letter",
                {
                    rotation: 45,
                    opacity: 0,
                    duration: 0.25,
                    stagger: 0.05,
                },
                0.05
            )
            .to(".intro", {
                display: "none",
            });
    }, []);

    return (
        <div className="intro">
            <div className="intro__bit"></div>
            <div className="intro__bit"></div>
            <div className="intro__bit"></div>
            <div className="intro__bit"></div>
            <div className="intro__bit"></div>
            <span className="intro__welcome-message">
                <span className="intro__welcome-message__welcome-letter">
                    W
                </span>
                <span className="intro__welcome-message__welcome-letter">
                    e
                </span>
                <span className="intro__welcome-message__welcome-letter">
                    l
                </span>
                <span className="intro__welcome-message__welcome-letter">
                    c
                </span>
                <span className="intro__welcome-message__welcome-letter">
                    o
                </span>
                <span className="intro__welcome-message__welcome-letter">
                    m
                </span>
                <span className="intro__welcome-message__welcome-letter">
                    e
                </span>
            </span>
        </div>
    );
}
