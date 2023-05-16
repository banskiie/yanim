import React from "react";
import ht from "../../../assets/img/hometestimonial/ht.jpg";

const Testimonial = () => {
  return (
    <div className="w-full z-10 bg-primary shadow-2xl flex  flex-col items-center justify-center py-12 gap-y-4">
      <span className="text-secondary engraved-text text-7xl font-alex">
        Love Letter From Our Past Client
      </span>
      <img
        className="h-56 rounded-full border-8 shadow-lg border-accent"
        src={ht}
        alt="Yen & Cris wedding picture"
      />
      <article className="text-white w-3/5 text-2xl font-display text-center ">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        nam est nostrum nisi saepe perferendis rem rerum in. Quibusdam, odio
        cumque iusto sapiente consequatur aperiam dolor quaerat quas quasi
        recusandae."
      </article>
      <p className="text-2xl flex items-center justify-center gap-x-2">
        - Yen & Cris{" "}
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M8 2.42l-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 11-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 11-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 01-.052-.45l-.04.08a.25.25 0 11-.447-.224l.235-.468zM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398z"
          />
        </svg>
      </p>
    </div>
  );
};

export default Testimonial;
