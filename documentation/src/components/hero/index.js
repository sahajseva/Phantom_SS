import React, { useState, useRef } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ReactPlayer from "react-player";
import clsx from "clsx";
import { IoMdPlay, IoMdPause, IoMdRefresh } from "react-icons/io";

import styles from "./styles.module.css";

const videoURLs = [
    "https://www.youtube.com/watch?v=xv8M3ScElv0&ab_channel=PankodTV",
    "https://www.youtube.com/watch?v=Sl2GMg1_jLA&ab_channel=PankodTV",
    "https://www.youtube.com/watch?v=Pi4YaFXgYRE&ab_channel=PankodTV",
    "https://www.youtube.com/watch?v=YTRidQONQ0s&ab_channel=PankodTV",
];

export const Hero = () => {
    const playerRef = useRef();
    const [played, setPlayed] = useState(0);
    const [playing, setPlaying] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState(0);

    const handleSelectedVideo = (videoNumber) => {
        if (selectedVideo != videoNumber) {
            setPlayed(0);
            setSelectedVideo(videoNumber);
        }
    };

    const videoControls = (
        <div className={styles.controlsContainer}>
            <IoMdRefresh
                onClick={() => playerRef.current.seekTo(0)}
                className={styles.icon}
            />
            {playing ? (
                <IoMdPause
                    onClick={() => setPlaying((prev) => !prev)}
                    className={styles.icon}
                />
            ) : (
                <IoMdPlay
                    onClick={() => setPlaying((prev) => !prev)}
                    className={styles.icon}
                />
            )}
        </div>
    );

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="row row--justify--center">
                    <div className="col col--6">
                        <h1 className={styles.mainTitle}>
                            <span>A React-based framework</span>
                            <br />
                            for building data-intensive applications in no time.
                        </h1>
                    </div>
                </div>
                <div className={styles.linkButtons}>
                    <Link
                        className="button button--primary button--lg"
                        to={useBaseUrl("docs/")}
                    >
                        Get Started
                    </Link>
                </div>
                <div className="row row--justify--center">
                    <div className="col col--9">
                        <div className={styles.playerContainer}>
                            <ReactPlayer
                                ref={playerRef}
                                className={styles.reactPlayer}
                                width="100%"
                                height="100%"
                                muted
                                playing={playing}
                                controls={false}
                                progressInterval={500}
                                url={videoURLs[selectedVideo]}
                                onProgress={(value) => setPlayed(value.played)}
                                onPause={() => setPlaying(false)}
                                onPlay={() => setPlaying(true)}
                            />
                        </div>
                        <div className={styles.playerButtons}>
                            <div className={styles.playerButton}>
                                <progress
                                    max={1}
                                    value={selectedVideo === 0 ? played : 0}
                                />
                                <a
                                    className={clsx(
                                        styles.buttonTitle,
                                        selectedVideo === 0 &&
                                            styles.activeTitle,
                                    )}
                                    onClick={() => handleSelectedVideo(0)}
                                >
                                    Create Project
                                </a>
                                {selectedVideo === 0 && videoControls}
                            </div>
                            <div className={styles.playerButton}>
                                <progress
                                    max={1}
                                    value={selectedVideo === 1 ? played : 0}
                                />
                                <a
                                    className={clsx(
                                        styles.buttonTitle,
                                        selectedVideo === 1 &&
                                            styles.activeTitle,
                                    )}
                                    onClick={() => handleSelectedVideo(1)}
                                >
                                    First Page
                                </a>
                                {selectedVideo === 1 && videoControls}
                            </div>
                            <div className={styles.playerButton}>
                                <progress
                                    max={1}
                                    value={selectedVideo === 2 ? played : 0}
                                />
                                <a
                                    className={clsx(
                                        styles.buttonTitle,
                                        selectedVideo === 2 &&
                                            styles.activeTitle,
                                    )}
                                    onClick={() => handleSelectedVideo(2)}
                                >
                                    Authentication
                                </a>
                                {selectedVideo === 2 && videoControls}
                            </div>
                            <div className={styles.playerButton}>
                                <progress
                                    max={1}
                                    value={selectedVideo === 3 ? played : 0}
                                />
                                <a
                                    className={clsx(
                                        styles.buttonTitle,
                                        selectedVideo === 3 &&
                                            styles.activeTitle,
                                    )}
                                    onClick={() => handleSelectedVideo(3)}
                                >
                                    i18n Customization
                                </a>
                                {selectedVideo === 3 && videoControls}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
