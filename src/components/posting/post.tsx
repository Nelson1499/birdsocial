import Image from "next/image"
import image from "../../images/thumb-1920-97962.jpg"
import { Interaction } from "./interaction"

export const Post = () => {
  const array = [
    {
      image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe distinctio eos quam! Quas, atque culpa aut harum ipsum quae, ea ullam error quam sint, illo rerum facilis corrupti a?"
    },
    {
      image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe distinctio eos quam! Quas, atque culpa aut harum ipsum quae, ea ullam error quam sint, illo rerum facilis corrupti a?"
    },
    {
      image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe distinctio eos quam! Quas, atque culpa aut harum ipsum quae, ea ullam error quam sint, illo rerum facilis corrupti a?"
    },
    {
      image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe distinctio eos quam! Quas, atque culpa aut harum ipsum quae, ea ullam error quam sint, illo rerum facilis corrupti a?"
    },
    {
      image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe distinctio eos quam! Quas, atque culpa aut harum ipsum quae, ea ullam error quam sint, illo rerum facilis corrupti a?"
    },
    {
      image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe distinctio eos quam! Quas, atque culpa aut harum ipsum quae, ea ullam error quam sint, illo rerum facilis corrupti a?"
    },
    {
      image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe distinctio eos quam! Quas, atque culpa aut harum ipsum quae, ea ullam error quam sint, illo rerum facilis corrupti a?"
    },
    {
      image,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe distinctio eos quam! Quas, atque culpa aut harum ipsum quae, ea ullam error quam sint, illo rerum facilis corrupti a?"
    }
  ]
  return array.map((a, i) => (
    <article key={i} className="border-t-2 border-t-white border-opacity-10">
      <div className="flex my-2">
        <Image className="w-14 h-14 rounded-full" src={a.image} alt="perfil" />
        <div className="w-full mx-4">
          <p>{a.content}</p>
        </div>
      </div>
      <Interaction />
    </article>
  ))
}
