
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description: "Our menbership management software provides full automation of membership renewals and payments.",
      img: "/src/assets/servicesIcon/membership.png"
    },
    {
      id: 2,
      title: "National Associations",
      description: "Our membership management software provides full automation of membership renewals and payments.",
      img: "/src/assets/servicesIcon/association.png"
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description: "Our membership management software provides full automation of membership renewals and payments.",
      img: "/src/assets/servicesIcon/clubsgroups.png"
    },

  ]
  return (
    <div className="md: px-14 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
        <p> We have been working with some Fortune 500+ clients</p>

        {/* Company Logo*/}
        <div className=" my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/logoCompany/logo1.png" alt="logo company1" />
          <img src="/src/assets/logoCompany/logo2.png" alt="logo company2" />
          <img src="/src/assets/logoCompany/logo3.png" alt="logo company3" />
          <img src="/src/assets/logoCompany/logo4.png" alt="logo company4" />
          <img src="/src/assets/logoCompany/logo5.png" alt="logo company5" />
          <img src="/src/assets/logoCompany/logo6.png" alt="logo company6" />
        </div>
      </div>

      {/* services card*/}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">Manage your entire community in a single system</h2>
        <p className="text-neutralDGrey">Who is Nextcent suitable for?</p>
      </div>


      {/* cards */}
      <div className=" mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {
          services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md
           shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
            <div >
              <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl "><img src={service.img} alt={service.title} className="ml-5"></img></div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
              <p className="text-sm text-neutralDGrey">{service.description}</p>
            </div>
          </div>)
        }
      </div>





    </div>
  )
}

export default Services