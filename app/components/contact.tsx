import { Linkedin, Mail, Github, HeartHandshake } from 'lucide-react';

export function Contact() {
  return (
    <div>
        <div className='px-14 pb-8'>
            {/*need to create form for people to send a contact*/}
            <section>
                <h1><HeartHandshake/>  Lets Chat! </h1>
                <p>Feel free to reach out to me if you have any questions or would like to connect!</p>
            </section>
            <br/>
            <section className=' py-9 dark:bg-gray-700 bg-gray-100 p-8 rounded-lg'>
                <form className='max-w-md mx-auto'>
                    <label className="block">
                        <span className="text-gray-700 dark:text-white">Name</span>
                        <input 
                            id="name"
                            type="text" 
                            className="px-[0.5rem] mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700 dark:text-white">Email</span>
                        <input 
                            id="email"
                            type="email" 
                            className="px-[0.5rem] mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700 dark:text-white">Message</span>
                        <textarea 
                            id="message" 
                            rows={10}
                            className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here...">
                        </textarea>
                    </label>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </section>

        </div>
        <div className="max-w-md mx-auto">
            {/*Here I will put logos for Linkedin, Gmail, Github*/}
            <div className="flex justify-center gap-4 mb-8">
                <a href="https://www.linkedin.com/in/beteabtefera/" target="_blank">
                    <Linkedin size={40}/>
                </a>
                <a href="mailto:beteabtefera@gmail.com" target="_blank">
                    <Mail size = {40}/>
                </a>
                <a href="https://github.com/BeteabTefera" target="_blank">
                    <Github size = {40}/>
                </a>
            </div>
        </div>
    </div>
  )
}

