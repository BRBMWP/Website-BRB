// Clean server-rendered page; use client dialog component for read more
import ReadMoreDialog from "./components/ReadMoreDialog";
import Image from "next/image";
import photoMizumi from "@photo/MizuMi UV Acne Matte Serum (DP)/IMG_7516.JPG";
import photoSpotify from "@photo/Spotify/Spotify Pic.jpg";
import photoBangkokWorld from "@photo/Proposal Marketing Bangkok World/Bangkok World Final Project .jpg";
import photoPizza from "@photo/Pizza/pizza.png";
import AwardsCarousel from "./components/AwardsCarousel";
import photoProfile from "@photo/Profile/1673419968680.jpg";
import iconIntern from "@icon/Internship Expericence/Icon Intern Exp.png";
import marketIcon from "@icon/Internship Expericence/marketIcon.png";
import trueMoney from "@photo/truemoney/truemoney.png";
import { BarChart2, TrendingUp, Brush, Film } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-[var(--card-border)]">
        <nav className="container flex items-center justify-between py-3">
          <a href="#home" className="font-semibold text-lg navy">Tanaphop Sangwan</a>
          <ul className="hidden sm:flex gap-6 text-sm">
            <li><a className="nav-link" href="#projects">Projects</a></li>
            <li><a className="nav-link" href="#internships">Internships</a></li>
            <li><a className="nav-link" href="#class-projects">Class Projects</a></li>
            <li><a className="nav-link" href="#class-projects-production">Production</a></li>
            <li><a className="nav-link" href="#awards">Awards</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="py-8 sm:py-16">
          <div className="relative overflow-hidden min-h-[380px] sm:min-h-[480px] md:min-h-[560px]">
            <Image src={photoProfile} alt="Profile photo of Tanaphop Sangwan" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative container px-6 sm:px-10 py-16 sm:py-24">
              <h1 className="text-5xl sm:text-[56px] font-extrabold tracking-tight text-white">Tanaphop Sangwan</h1>
              <p className="mt-5 text-[18px] leading-8 max-w-3xl text-white/90">Bachelor of Business Management, Silpakorn University (2021–2025). Marketing, branding, and production experience with a focus on research-driven campaigns.</p>
              <div className="mt-8 flex gap-4">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-outline">Contact</a>
              </div>
            </div>
          </div>
        </section>

        {/* Production */}
       

        {/* Projects */}
      
        <section id="awards" className="container py-12">
          <h2 className="section-title mb-6">Projects</h2>
          <div className="card p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <Image src={trueMoney} alt="Thesis icon" width={96} height={96} className="rounded" />
              
            <div className="hidden sm:block w-px self-stretch bg-[var(--card-border)]" aria-hidden="true" />
            <div className="flex-1 w-full">
              <div className="font-semibold">Thesis: Truemoney Wallet Loyalty</div>
               <p className="text-sm mt-2 opacity-90">
              Thesis Study of Purchasing and Service Usage Behavior, E-Service Quality Satisfaction, and Loyalty of
                    Digital Natives and Digital Immigrants Toward Truemoney Wallet (Quantitative Research). This study explores
                    purchasing and service usage behavior, satisfaction with electronic service quality, and brand loyalty among
                    user groups. The objective is to investigate how satisfaction with service quality influences brand loyalty
                    within each group.
              </p>
              <a className="mt-3 inline-block link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1pz0WsND_fZe0B9M5hkmMuUno6nrYO6uh/view?usp=sharing">View more →</a>
            </div>
          </div>
        </section>
        {/* Internships */}
        <section id="internships" className="container py-12 ">
          <h2 className="section-title mb-6">Internship Experience</h2>
          
          <div className="flex flex-col gap-4">
            <article className="card p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <Image src={iconIntern} alt="Internship Experience icon" width={96} height={96} className="rounded" />
              <div className="hidden sm:block w-px self-stretch bg-[var(--card-border)]" aria-hidden="true" />
              <div className="flex-1 w-full">
                <h3 className="font-semibold">Real Estate Campaign Analysis</h3>
                <p className="text-sm mt-2 opacity-90">Analyze competitors’ campaigns in the real estate industry over the past year. Identify the objectives of each brand’s campaign, the mechanics involved, the rewards or prizes offered to the target audience, and the communication channels used</p>
                <a className="mt-3 inline-block link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1P3pyYmXzi8JCr7AH1DrcRaCqTUt-yZW8/view?usp=sharing">View doc →</a>
              </div>
            </article>
            <article className="card p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <Image src={marketIcon} alt="Affiliate marketing analysis icon" width={96} height={96} className="rounded" />
              <div className="hidden sm:block w-px self-stretch bg-[var(--card-border)]" aria-hidden="true" />
              <div className="flex-1 w-full">
                <h3 className="font-semibold">Affiliate Marketing Analysis</h3>
                <p className="text-sm mt-2 opacity-90"> Analyze Affiliate Marketing within different marketplace platforms by identifying their advantages and disadvantages. Evaluate which types of products are most suitable for each marketplace, and examine the characteristics and purchasing behaviors of target consumers specific to each platform.</p>
                <a className="mt-3 inline-block link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1yhH94Ws6K_6JPcweliUHsPNiPBvFMYf9/view?usp=sharing">View doc →</a>
              </div>
            </article>
          </div>
        </section>

        {/* Class Projects */}
        <section id="class-projects" className="section-alt">
          <div className="container py-12">
            <h2 className="section-title mb-6">Projects in Class</h2>
            <h3 className="font-semibold text-[18px] mb-3">Marketing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="card card-hover p-5">
                <Image src={photoSpotify} alt="Spotify: Last Song Before You Die" className="rounded-md border" />
                <h3 className="font-semibold">Spotify: Last Song Before You Die</h3>
                <p className="mt-2 text-sm opacity-90">Campaign based on 4Rs with exclusive video content and podcast-focused insights.</p>
                <div className="mt-3">
                  <ReadMoreDialog
                    title="Spotify: Last Song Before You Die"
                    externalHref="https://drive.google.com/file/d/16uKkFjdpiJX8doC2ObqYda3N7j9gKi2S/view?usp=sharing"
                    externalLabel="View full project"
                  >
                    A campaign built on the 4Rs (Reduce, Reuse, Recycle, Respect) and customer insights. It delivers exclusive
                    videos not available elsewhere and addresses podcast listeners with tailored exclusive content.
                  </ReadMoreDialog>
                </div>
              </article>
              <article className="card card-hover p-5">
              <Image src={photoPizza} alt="Pizza" className="rounded-md border" />
                <h3 className="font-semibold">Brand Mgmt: The Pizza Company</h3>
                <p className="mt-2 text-sm opacity-90">Cloud Kitchen strategy analysis with market data and branding frameworks.</p>
                <div className="mt-3">
                  <ReadMoreDialog
                    title="Brand Management: The Pizza Company"
                    externalHref="https://drive.google.com/file/d/1IO1r1kWrf_OsJZTiUom8TDY8WUB7e5EV/view?usp=sharing"
                    externalLabel="View full project"
                  >
                    Comprehensive brand analysis emphasizing Cloud Kitchen strategy using insights from Euromonitor International
                    and Mordor Intelligence. Methods included Brand Personality, User & Usage Imagery, Brand Benefits, Total Brand
                    Communication, Perceptual Mapping, and Product Life Cycle Management.
                  </ReadMoreDialog>
                </div>
              </article>
              <article className="card card-hover p-5">
              <Image src={photoBangkokWorld} alt="Proposal Marketing: Bangkok World" className="rounded-md border" />
                <h3 className="font-semibold">Proposal: Bangkok World</h3>
                <p className="mt-2 text-sm opacity-90">Night market event concept with celebrity engagement to reach target groups.</p>
                <div className="mt-3">
                  <ReadMoreDialog
                    title="Proposal Marketing: Bangkok World"
                    externalHref="https://drive.google.com/file/d/1X9k51IPWSACWya830vqH_eBmjHNuP0xq/view?usp=sharing"
                    externalLabel="View full project"
                  >
                    A second campaign with a factory girl theme. Organized a night market event for accessibility to the target
                    group and considered celebrity participation to attract audiences and hit customer goals.
                  </ReadMoreDialog>
                </div>
              </article>
            </div>
            <h3 className="font-semibold text-[18px] mt-10 mb-3" id="class-projects-production">Production</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="card card-hover p-5">
                <Image src={photoMizumi} alt="MizuMi UV Acne Matte Serum (DP)" className="rounded-md border" />
                <h3 className="font-semibold">MizuMi UV Acne Matte Serum (DP)</h3>
                <p className="mt-2 text-sm opacity-90">Cameraman/DP setting camera angles; defined target audience and crafted the key message.</p>
                <div className="mt-3">
                  <ReadMoreDialog
                    title="MizuMi UV Acne Matte Serum (DP)"
                    externalHref="https://drive.google.com/file/d/1Bz-TfCDtcwQEFgkf8ygfgMLY-r2K_RVy/view?usp=sharing"
                    externalLabel="View project"
                  >
                    In this role, I served as the cameraman or Director of Photography (DP), responsible for setting camera
                    angles in the breakdown. Additionally, I defined the target audience and crafted the key message for the
                    project.
                  </ReadMoreDialog>
                </div>
              </article>
              <article className="card card-hover p-5">
                <video className="rounded-md border w-full" controls preload="metadata" >
                  <source src="/photo/Propoliz/Propoliz.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className="font-semibold">Propoliz Advertise</h3>
                <p className="mt-2 text-sm opacity-90">Analyzed scenes to determine lighting; collaborated with the director and DP.</p>
                <div className="mt-3">
                  <ReadMoreDialog
                    title="Propoliz Advertise"
                    externalHref="https://drive.google.com/file/d/1rj2qdZId-DXv_rwtdjLd93Pltkl-9VzB/view?usp=sharing"
                    externalLabel="Watch here"
                  >
                    I analyzed each scene from the breakdown to determine appropriate lighting placement. I collaborated closely
                    with the director and the Director of Photography (DP) to ensure that the lighting supported the visual tone
                    and narrative of the film.
                  </ReadMoreDialog>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Awards */}
        <section id="awards" className="container py-12">
          <h2 className="section-title mb-6">Awards</h2>
          <div className="card p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-1 w-full">
              <AwardsCarousel />
            </div>
            <div className="hidden sm:block w-px self-stretch bg-[var(--card-border)]" aria-hidden="true" />
            <div className="flex-1 w-full">
              <div className="font-semibold">Young Influencer Challenge Thailand</div>
              <div className="text-sm mt-1 opacity-90">September – October 2023</div>
              <div className="text-sm mt-1 opacity-90">Best Seller Award — 1st Runner-up · Best Idea Award</div>
              <p className="text-sm mt-2 opacity-90">
                My role in this project is to listen and understand the characteristics and behaviors of each target group,
                in order to select the appropriate KOLs to promote products correctly according to the target audience.
                Additionally, I am responsible for designing various graphics for the project, such as product sale posters
                and graphics for special occasions.
              </p>
              <a className="mt-3 inline-block link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1NvARH5MNzarIRB9WeRiXLSON5CdCTe12/view?usp=sharing">View more →</a>
            </div>
          </div>
        </section>

        {/* Education & Skills */}
        <section id="education" className="section-alt">
          <div className="container py-12">
            <h2 className="section-title mb-6">Education & Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <ol className="relative border-s-2 border-[var(--card-border)] ps-5 space-y-6">
                  <li>
                    <div className="font-semibold">Bachelor of Business Management</div>
                    <div className="text-sm opacity-90">Silpakorn University — 2021–2025</div>
          </li>
                  <li>
                    <div className="font-semibold">High School Math Program</div>
                    <div className="text-sm opacity-90">Assumption College — 2015–2021</div>
          </li>
        </ol>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="card p-3 text-sm flex items-center gap-2">
                    <BarChart2 className="h-4 w-4" />
                    <span>SPSS</span>
                  </div>
                  <div className="card p-3 text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Google Trends</span>
                  </div>
                  <div className="card p-3 text-sm flex items-center gap-2">
                    <Brush className="h-4 w-4" />
                    <span>Adobe Photoshop</span>
                  </div>
                  <div className="card p-3 text-sm flex items-center gap-2">
                    <Film className="h-4 w-4" />
                    <span>Premiere Pro</span>
                  </div>
                  <div className="card p-3 text-sm flex items-center gap-2">
                    <Film className="h-4 w-4" />
                    <span>CapCut</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-12">
          <h2 className="section-title mb-6 ">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>Tel: <a className="link" href="tel:0954712815">095-471-2815</a></li>
            <li>Email: <a className="link" href="mailto:TanaphopSangwan135@gmail.com">TanaphopSangwan135@gmail.com</a></li>
            <li>Address: Samut Sakhon, Thailand</li>
          </ul>
        </section>
      </main>

      <footer className="container py-8 text-center text-sm border-t border-[var(--card-border)]">
        © 2025 Tanaphop Sangwan
      </footer>
    </div>
  );
}
