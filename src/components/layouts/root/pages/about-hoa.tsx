import { Helmet } from "react-helmet"
import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const AboutHOA: React.FC<any> = (_props) => {
  return (
    <>
      <Helmet>
        <title>Home Owners Association</title>
      </Helmet>
      <Heading level={HeadingLevel.H1}>Home Owners Association:</Heading>
      <p>
        The Atlantis has benefited from a active community of co-owners who are passionate in ensuring Atlantis remains a welcoming destination and home for years to come.<br/><br/>
      </p>
      <div className="space-y-5 space-y-8">
        <article>
          <Heading level={HeadingLevel.H5}>Board of Directors</Heading>
          <p> 
            The Board of Directors is comprised of elected members of the community. Board meetings take place monthly throughout the year and can be attended in person of online by co-owners of the Atlantis.
          </p>
          <br/>
          <div>
            <strong>Board Members:</strong>
            <div className="grid text-sm m-9" style={{ gridTemplateColumns:'repeat(auto-fill, 15rem)', gap:'20px'}}>
              <div className="flex items-start inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                  <div>
                    <strong>Joseph C. Perry,Sr.</strong>
                    <div className="text-xs">
                      <p>President</p>
                      <p>Unit XXX</p>
                      <p>Term expires April </p>
                    </div>
                  
                  </div>            
              </div>
              <div className="flex items-start inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                  <div>
                    <strong>Melvin Rostek</strong>
                    <div className="text-xs">
                      <p>Vice President</p>
                      <p>Unit XXX</p>
                      <p>Term expires April </p>
                    </div>
                  </div>
              </div>
              <div className="flex items-start inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                  <div>
                    <strong>Sherriel Sullivan</strong>
                    <div className="text-xs">
                      <p>Treasurer</p>
                      <p>Unit XXX</p>
                      <p>Term expires April </p>
                    </div>
                  </div>
              </div>
              <div className="flex items-start inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                  <div>
                    <strong>John Foley</strong>
                    <div className="text-xs">
                      <p>Secretary</p>
                      <p>Unit XXX</p>
                      <p>Term expires April </p>
                    </div>
                  </div>
              </div>
              <div className="flex items-start inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-[5rem] mr-3"/>
                  <div>
                    <strong>Marty Levy</strong>
                    <div className="text-xs">
                      <p>Corr. Secretary</p>
                      <p>Unit XXX</p>
                      <p>Term expires April </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </article>
        <div>       
          <Heading level={HeadingLevel.H5}>Committees</Heading>
          <p> 
            Co-Owners are encouraged to join and form committees to help advance the mission of the Atlantis. The following are a sampling of the current committees and their recent accomplishments.
          </p>
        </div>
        <article>
          <Heading level={HeadingLevel.H6}>Vending Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
              <div className="flex items-center inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                <div>
                  <strong>Xxxx Xxxxxxx</strong><br/>
                  <p>Unit XXX</p>
                </div>            
              </div>
              <div className="flex items-center inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                <div>
                  <strong>Xxxx Xxxxxxx</strong><br/>
                  <p>Unit XXX</p>
                </div>
              </div>
              <div className="flex items-center inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                <div>
                  <strong>Xxxx Xxxxxxx</strong><br/>
                  <p>Unit XXX</p>
                </div>
              </div>
              <div className="flex items-center inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                <div>
                  <strong>Xxxx Xxxxxxx</strong><br/>
                  <p>Unit XXX</p>
                </div>
              </div>
              <div className="flex items-center inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                <div>
                  <strong>Xxxx Xxxxxxx</strong><br/>
                  <p>Unit XXX</p>
                </div>
              </div>
              <div className="flex items-center inline-block">
                <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                <div>
                  <strong>Xxxx Xxxxxxx</strong><br/>
                  <p>Unit XXX</p>
                </div>
              </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Vending Committee aims to provide convenient and affordable access to snacks and beverages to all visitors to the Atlantis while also generating additional revenue.
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  <span className="font-semibold">APR-2022 : </span> 
                  Chips / Soda and Water have been relocated to the Security Office and are now available to all visitors. The Committee members are helping to restock supplies from the local BJs Wholesale Club.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">DEC-2021 : </span> 
                  Filtered Water / Ice Machine added in underpass offering quick an easy way to get water and ice without having to leave the property.
                </li>
              </ul>
            </p>
          </div>
        </article>
        <article>
          <Heading level={HeadingLevel.H6}>Grounds Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>            
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Grounds Committee aims to ensure that the exterior of the Atlantis is welcoming and vibrant through flower arrangements, flowerbeds, and other decorations.
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  <span className="font-semibold">JUN-2022 : </span> 
                  Through the hard work of the Committee members, visitors to the Atlantis are welcomed with new flower pots and flower arrangements at the entrance as well as in the Pool area.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">APR-2022 : </span> 
                  A new clock has been selected and mounted on the building within easy view of the pool. This new clock is much easier to read and better matches the aesthetic of the Atlantis.
                </li>
              </ul>
            </p>
          </div>
        </article>
        <article>
          <Heading level={HeadingLevel.H6}>Internet and TV Committee</Heading>
          <div className="ml-8 space-y-8"> 
            <div>
              <strong>Committee Members:</strong>
              <div className="grid text-sm ml-9 my-3" style={{ gridTemplateColumns:'repeat(auto-fill, 10rem)', gap:'20px'}}>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>            
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
                <div className="flex items-center inline-block">
                  <img alt="profile" src="https://via.placeholder.com/200" className="object-cover rounded-full w-12 mr-3"/>
                  <div>
                    <strong>Xxxx Xxxxxxx</strong><br/>
                    <p>Unit XXX</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span className="font-bold">Committee Charter: </span> <br/>
              The Internet and TV Committee aims to meet the changing needs of co-owners of the Atlantis. This committee will be responsible for the following:
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                  Determining the service providers that can provide services to the Atlantis, and understand current infrastructure to allow vendors to ascertain the investment needed to meet the needs of the Atlantis and what services are possible.
                </li>
                <li className="mb-2">
                  Surveying the co-owners to determine the willingness to pay for services and what services are desired.
                </li>
                <li className="mb-2">
                  Developing a RFP for the services desired, with a 3 year price-lock guarantee, with optional continued renewal with a maximum of 5% increase at the end the 3rd year, for a period of up to 6 years.
                </li>
                <li className="mb-2">
                  Providing the co-owners with a short list of possible options and allow the co-owners to vote on which plan(s) the Atlantis should offer co-owners.
                </li>
              </ul>
            </p>
            <p>
              <span className="font-bold">Recent Accomplishments: </span> 
              <ul className="text-sm list-disc ml-5 mb-3 mt-2">
                <li className="mb-2">
                    <span className="font-semibold">DEC-2022 : </span> 
                    Established contacts with Comcast and Amtech.
                </li>
              </ul>
            </p>
          </div>
        </article>
      </div>
    </>
  )
}