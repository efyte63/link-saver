import React, { useState } from 'react'

interface FormmakerProps {
  setadding: React.Dispatch<React.SetStateAction<boolean>>;
}

const Formmaker: React.FC<FormmakerProps> = ({ setadding }) => {
  const [title, setitle] = useState("")
  const [link, setlink] = useState("")
  const [description, setdescription] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log({
      title,
      link,
      description
    })

    setadding(false)
  }

  return (
    <div className="absolute bg-black h-[500px] w-[800px] top-[150px] left-[400px] flex flex-col justify-center items-center z-40 gap-10">
      
      <h1 className="text-red-200 text-6xl">Enter details</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 w-[300px]">
        
        <input
          type="text"
          placeholder="Enter title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setitle(e.target.value)}
        />

        <input
          type="url"
          placeholder="Enter link"
          className="border p-2 rounded"
          value={link}
          onChange={(e) => setlink(e.target.value)}
        />

        <textarea
          placeholder="Enter description"
          className="border p-2 rounded"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default Formmaker