"use client";
import { useEffect } from "react";

const TiktokEmbedSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="tiktok" className="mt-12 px-4 flex justify-center">
      <div className="rounded-2xl border shadow-md p-6 w-full max-w-3xl text-center">
        <h3 className="text-2xl font-bold mb-2 text-white">
          Check out my <span className="text-primary-blue">TikTok</span>!
        </h3>
        <p className="mb-6 text-gray-300">
          Follow for more tech and dev content 🚀
        </p>
        <div className="flex justify-center">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@veryantt"
            data-unique-id="veryantt"
            data-embed-type="creator"
            style={{ maxWidth: 780, minWidth: 288 }}
          >
            <section>
              <a
                target="_blank"
                href="https://www.tiktok.com/@veryantt?refer=creator_embed"
                rel="noopener noreferrer"
              >
                @veryantt
              </a>
            </section>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TiktokEmbedSection;
