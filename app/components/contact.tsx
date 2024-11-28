export function Contact() {
  return (
    <div className="max-w-md mx-auto">
        {/*Here I will put logos for Linkedin, Gmail, Github*/}
        <div className="flex justify-center gap-4 mb-8">
            <a href="https://www.linkedin.com/in/beteabtefera/" target="_blank">
                <img src="https://www.svgrepo.com/show/108614/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="mailto:beteabtefera@gmail.com" target="_blank">
                <img src="https://www.svgrepo.com/show/306107/gmail.svg" alt="Gmail" className="w-8 h-8" />
            </a>
            <a href="https://github.com/BeteabTefera" target="_blank">
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="Gmail" className="w-8 h-8" />
            </a>
        </div>
    </div>
  )
}

