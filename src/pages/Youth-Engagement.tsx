import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Award, Target, Users, Megaphone, Handshake, Book } from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const YouthEngagement = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Youth and
                <span className="text-gradient-blue">
                  {" "}
                  Community Engagement
                </span>{" "}
                Program
              </h1>
              <p className="text-xl text-gray-700">
                Youth empowerment and social transformation by fostering an
                environment where young people can express their ideas, engage
                in decision-making processes, and actively contribute to their
                communities.
              </p>
            </div>
          </div>
        </section>
         <section className="py-16 md:py-24">
                  <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl font-bold mb-6">Core Objectives</h2>
                        <p className="text-gray-700 mb-6">
                          The Youth Engagement Program connects Swahilipot Hub with universities across the coastal
                          region through student representatives who promote our initiatives, organize campus events,
                          and build communities of innovation on their campuses.
                        </p>
                        <div className="space-y-4 mb-6">
                          <div className="flex gap-3">
                            <Handshake className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                            <div>
                              <h3 className="font-semibold">Meaningful Youth Engagement</h3>
                              <p className="text-gray-600"> Providing platforms for young people to voice their opinions, participate in co-creation, and engage in leadership roles within Swahilipot Hub and beyond.
</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <FaMagnifyingGlass className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                            <div>
                              <h3 className="font-semibold">Policy and Advocacy Training</h3>
                              <p className="text-gray-600"> Equipping young advocates with the knowledge and skills needed to influence policy decisions and hold leaders accountable.
</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Book className="h-6 w-6 text-swahilipot-600 flex-shrink-0" />
                            <div>
                              <h3 className="font-semibold">Capacity Building and Resource Sharing</h3>
                              <p className="text-gray-600"> Facilitating knowledge-sharing, skills training, and collaboration among youth organizations and community hubs.</p>
                            </div>
                          </div>
                          
                  
                        </div>
                        {/* <Button size="lg" className="bg-swahilipot-600 hover:bg-swahilipot-700">
                          Apply to Become an Ambassador
                        </Button> */}
                      </div>
                      <div className="relative">
                        <div className="aspect-video bg-swahilipot-100 rounded-lg overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80"
                            alt="Campus ambassador presenting"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-swahilipot-50 rounded-lg -z-10"></div>
                      </div>
                    </div>
                  </div>
                </section>
      </main>

      <Footer />
    </>
  );
};

export default YouthEngagement;
