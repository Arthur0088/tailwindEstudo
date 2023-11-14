import aboutImg from "../assets/about.png"

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div>
          <div>
            <img src={aboutImg} alt="about image" />
          </div>
          <div>
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About