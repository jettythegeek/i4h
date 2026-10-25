import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Baby,
  Briefcase,
  EnvelopeSimple,
  ForkKnife,
  GraduationCap,
  HandHeart,
  HouseLine,
  MapPin,
  Phone,
  UsersThree,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { programs } from "@/data/site";
import { getPosts } from "@/lib/sanity";
import PostGrid from "@/components/PostGrid";
import MobileSectionTabs from "@/components/MobileSectionTabs";
import DonationChooser from "@/components/DonationChooser";
import ImpactReports from "@/components/ImpactReports";

const pageData = {
  about: {
    eyebrow: "About us",
    title:
      "The Poverty, Skills, and Care Crisis Facing Vulnerable Families in Uganda",
    intro:
      "Christ’s Hands Centre exists to restore dignity, stability, and opportunity by addressing these challenges together - skills, food, care, and emotional support - not in isolation.",
    image: "/images/chs/about-cover.jpeg",
  },
  "what-we-do": {
    eyebrow: "What we do",
    title: "Where we work and who we serve",
    intro:
      "Christ’s Hands Centre works in Kasangati and surrounding communities in Uganda, serving families facing the highest levels of vulnerability and limited access to social services - regardless of religion, ethnicity, gender, or sexual orientation.",
    image: "/images/chs/where-we-work.jpeg",
  },
  programs: {
    eyebrow: "Programs",
    title: "TVET-WRAP",
    intro:
      "TVET-WRAP (Whole-Family Resilience & Advancement Program) is a community-owned vocational training program in Kasangati and surrounding communities in central Uganda.",
    image: "/images/chs/programs-cover.jpeg",
  },
  impact: {
    eyebrow: "Impact",
    title: "Impact and accountability",
    intro:
      "With 782 graduates from 2025, 342 students currently enrolled, and 98% of spending going to programs, CHC is transforming the lives of vulnerable women and youth in rural Uganda.",
    image: "/images/chs/impact.jpeg",
  },
  partner: {
    eyebrow: "Support our mission",
    title: "Public · Private · Strategic partners",
    intro:
      "Partnerships make whole-family empowerment possible. We collaborate with corporations, foundations, government agencies, and development partners.",
    image: "/images/chs/partnerships-cover.jpeg",
  },
  donate: {
    eyebrow: "Donate",
    title: "Help provide skills training for vulnerable families in Uganda",
    intro:
      "Your support provides skills, meals, childcare, and emotional support to women, single mothers, youth, and children in Kasangati, Uganda. Every contribution helps families move from daily survival toward self-reliance.",
    image: "/images/chs/donate-cover.jpeg",
  },
  "success-stories": {
    eyebrow: "Success stories",
    title: "Success Stories",
    intro: "",
    image: "/images/chs/home-accountability.jpeg",
  },
  blog: {
    eyebrow: "Blog & news",
    title: "Latest News Update",
    intro: "",
    image: "/images/chs/home-work.jpeg",
  },
  contact: {
    eyebrow: "Contact us",
    title: "Contact Christ’s Hands Centre",
    intro: "Contact our team in Kasangati, Uganda.",
    image: "/images/chs/public-private.jpeg",
  },
  "privacy-policy": {
    eyebrow: "Legal",
    title: "Privacy notice",
    intro: "Christ’s Hands Centre Society",
    image: "/images/chs/about-mission.jpg",
  },
  "terms-of-service": {
    eyebrow: "Legal",
    title: "Terms of use",
    intro: "Christ’s Hands Centre Society",
    image: "/images/chs/about-mission.jpg",
  },
};
export const slugs = new Set(Object.keys(pageData));
const sectionTabs = {
  about: [
    { label: "Mission, vision and values", href: "#mission" },
    { label: "History", href: "#history" },
    { label: "Theory of change", href: "#theory" },
    { label: "Our team", href: "#team" },
  ],
  "what-we-do": [
    { label: "Where we work", href: "#where" },
    { label: "Who we serve", href: "#serve" },
    { label: "What we prioritize", href: "#priorities" },
  ],
  partner: [
    { label: "Partner with us", href: "/partner" },
    { label: "Donate", href: "/donate" },
  ],
  donate: [
    { label: "Partner with us", href: "/partner" },
    { label: "Donate", href: "/donate" },
  ],
};
const Button = ({ href, children, tone = "dark" }) => (
  <Link href={href} className={`button ${tone}`}>
    {children}
    <ArrowUpRight size={14} weight="bold" />
  </Link>
);

function GivingLadder() {
  return (
    <div className="giving-grid client-giving-ladder">
      <Info title="CA$25/month">
        <strong>CA$300 annually</strong>
        <p>Enables one mother to complete a vocational training program.</p>
      </Info>
      <Info title="CA$50/month">
        <strong>CA$600 annually</strong>
        <p>Enables two mothers to complete vocational training programs.</p>
      </Info>
      <Info title="CA$100/month">
        <strong>CA$1,200 annually</strong>
        <p>Enables four mothers to complete vocational training programs.</p>
      </Info>
      <Info title="CA$250/month">
        <strong>CA$3,000 annually</strong>
        <p>Enables ten mothers to complete vocational training programs.</p>
      </Info>
    </div>
  );
}

export default async function InternalPage({ slug }) {
  const p = pageData[slug];
  const posts =
    slug === "blog" || slug === "success-stories" ? await getPosts() : [];
  return (
    <main className="internal-main">
      <section className="page-hero">
        <Image src={p.image} alt="" fill priority className="cover" />
        <div className="page-hero-shade" />
        <div className="wrap page-hero-copy">
          <span className="eyebrow">{p.eyebrow}</span>
          <h1>{p.title}</h1>
          <p>{p.intro}</p>
        </div>
      </section>
      <MobileSectionTabs items={sectionTabs[slug]} />
      {slug === "donate" && <DonationChooser />}
      {renderBody(slug, posts)}
    </main>
  );
}

function renderBody(slug, posts) {
  switch (slug) {
    case "about":
      return (
        <>
          <section className="section paper" id="mission">
            <div className="wrap">
              <div className="section-lead">
                <h2>Mission Vision, &amp; Values</h2>
                <p>Goals</p>
              </div>
              <div className="card-grid three">
                <Info title="Our Mission">
                  To empower vulnerable women, single mothers, and youth in
                  Uganda through vocational skills training, education,
                  nutrition, childcare, and psychosocial support, enabling
                  families to achieve self-reliance and long-term stability.
                </Info>
                <Info title="Our Vision">
                  Communities where women and youth are economically
                  independent, children are safe and educated, and families
                  thrive with dignity and hope.
                </Info>
                <Info title="Our Values">
                  <List
                    items={[
                      "Human Dignity: Every person deserves opportunity, safety, and respect.",
                      "Holistic Care: Sustainable change addresses economic, emotional, and family needs together.",
                      "Empowerment: Skills and knowledge are pathways to independence.",
                      "Compassion: We respond to vulnerability with empathy and action.",
                      "Community: Strong families build resilient communities.",
                    ]}
                  />
                </Info>
              </div>
              <GoalsGrid />
            </div>
          </section>
          <CrisisSection />
          <ImageSection
            id="history"
            image="/images/chs/about-mission.jpg"
            title="History"
          >
            <p>
              Christ’s Hands Centre (CHC) was initiated in 2024 in response to
              the visible suffering of vulnerable women and children in
              Kasangati and surrounding communities. What began as a local
              effort to help families survive has grown into a structured centre
              offering vocational training, childcare, education, meals, and
              emotional support.
            </p>
            <p>
              CHC was created in recognition of the fact that women cannot lift
              themselves out of poverty without practical skills, and that
              children cannot thrive without safety, nourishment, and care. By
              removing barriers such as hunger and lack of childcare, CHC
              enables mothers and youth to learn, heal, and build pathways to
              sustainable livelihoods.
            </p>
            <p>
              Today, CHC supports some of the most vulnerable families in
              Kasangati, while continuing to seek the resources needed to expand
              and strengthen its programs
            </p>
          </ImageSection>
          <ImageSection
            id="theory"
            image="/images/chs/theory.jpeg"
            title="Theory of Change"
            flip
            brand
          >
            <p>
              If CHC provides vulnerable single mothers and youth with daily
              nutrition, childcare, primary education, sexual education,
              psychosocial support, and comprehensive vocational skills training
              aligned with market needs…
            </p>
            <p>
              AND equips graduates with entrepreneurship training, financial
              literacy to launch microbusinesses…
            </p>
            <p>
              THEN women will gain employable skills, start small enterprises,
              earn income, and care for their children, while children receive
              consistent nutrition and education in a safe environment…
            </p>
            <p>
              SO THAT families break cycles of poverty, reduce crisis-driven
              harm, and build stable, resilient, and empowered futures across
              generations.
            </p>
          </ImageSection>
          <section className="section sand" id="team">
            <div className="wrap">
              <div className="section-lead">
                <h2>Our Team</h2>
                <p>Team, Our Precious Assets</p>
              </div>
              <div className="card-grid three">
                <Info title="Ntono Moreen">
                  <strong>Founder</strong>
                  <p>
                    Moreen was born in Buyala Budondo, Jinja District, Uganda,
                    1990. She graduated Trinity College Buwagi high school,
                    2009, and Busoga University (Iganga) Bachelor Arts (info
                    management), 2012. Moreen resides in Kasangati, Wakiso
                    District, Uganda.
                  </p>
                </Info>
                <Info title="Tabula Robert">
                  <strong>Vice, Chairperson</strong>
                  <p>
                    Robert was born in Nawangisa, Iganga District, Uganda, 1989.
                    He graduated Jinja Senior Secondary high school, 2006,
                    Makerere University (Jinja) Bachelor of Science (Education),
                    2009, and Busoga University (Iganga) Bachelor of Science
                    (Computer Technology), 2013. Robert resides in Kasangati,
                    Wakiso District, Uganda.
                  </p>
                </Info>
                <Info title="Robert Porter">
                  <strong>Executive</strong>
                  <p>
                    Robert was born in Weyburn, Saskatchewan, Canada, 1953. He
                    graduated Weyburn Collegiate high school, 1971, Saint Olaf
                    College Bachelor of Arts (Physics), 1974, and University of
                    Texas (Austin) Masters of Science (Acoustics), 1981. Robert
                    resides in Sidney, British Columbia, Canada.
                  </p>
                </Info>
              </div>
            </div>
          </section>
        </>
      );
    case "what-we-do":
      return (
        <>
          <ImageSection
            id="where"
            image="/images/chs/where-we-work.jpeg"
            title="Where we work"
          >
            <p>
              Christ’s Hands Centre works in Kasangati and surrounding
              communities in Uganda, serving families facing the highest levels
              of vulnerability and limited access to social services -
              regardless of religion, ethnicity, gender, or sexual orientation.
            </p>
          </ImageSection>
          <section className="section paper" id="serve">
            <div className="wrap">
              <div className="section-lead">
                <h2>Who we serve</h2>
                <p></p>
              </div>
              <div className="card-grid four">
                <Info title="Vulnerable women">
                  CHC equips vulnerable women with market-relevant vocational
                  skills, daily meals, and counselling, helping them build
                  income, confidence, and independence beyond daily survival.
                </Info>
                <Info title="Single mothers">
                  On-site childcare, daily meals, and counselling let single
                  mothers train without choosing between learning and caring,
                  building skills and stable income for their families.
                </Info>
                <Info title="Out-of-school youth">
                  Out-of-school youth gain free, hands-on training in ICT,
                  tailoring, baking, welding, hair barbering, and soap making,
                  plus entrepreneurship skills to turn learning into employment
                  or small businesses.
                </Info>
                <Info title="Children">
                  CHC set up the dedicated ‘ Ocean of Knowledge school’, where
                  children receive safe childcare, early education, and daily
                  meals, helping them stay nourished and ready to learn, while
                  their parents receive skills training.
                </Info>
              </div>
              <Button href="/donate">SUPPORT OUR WORK</Button>
            </div>
          </section>
          <section className="section ink white-text" id="priorities">
            <div className="wrap">
              <div className="section-lead">
                <h2>What we prioritize</h2>
                <p>
                  Our priorities reflect a holistic approach that addresses
                  immediate survival needs while building long-term pathways to
                  dignity, income, and family resilience.
                </p>
              </div>
              <div className="card-grid three">
                <Info title="Whole Family Empowerment">
                  <p>
                    Christ’s Hands Centre prioritizes whole-family empowerment.
                    By addressing the interconnected realities of hunger,
                    childcare, skills, and emotional wellbeing, we create
                    pathways for vulnerable women and children to move beyond
                    crisis and toward stable, self-reliant lives.
                  </p>
                  <p>
                    This integrated approach strengthens families today while
                    building healthier, more resilient communities for
                    generations to come.
                  </p>
                </Info>
                <Info title="Market-Relevant Vocational Skills">
                  <p>
                    CHC prioritizes vocational skills that translate directly
                    into real income opportunities. Training is designed around
                    trades with proven demand in local markets, enabling
                    participants to secure employment or launch
                    micro-enterprises.
                  </p>
                  <p>
                    Programs include tailoring and fashion design, baking and
                    confectionery, soap making, metal fabrication, notebook
                    production, hair and barbering, and information technology.
                    These skills are paired with entrepreneurship, budgeting,
                    and financial literacy so graduates can move from training
                    to sustainable livelihoods.
                  </p>
                  <p>
                    Our focus is not certification alone, but practical
                    employability - skills that can be used immediately, even in
                    modest or informal settings.
                  </p>
                </Info>
                <Info title="Long-Term Family Stability Over Short-Term Relief">
                  <p>
                    While emergency needs are real, CHC prioritizes long-term
                    family stability over temporary relief. Every program is
                    designed to move families from survival to self-reliance.
                  </p>
                  <List
                    items={[
                      "Build consistent income streams",
                      "Improve food security at home",
                      "Maintain safe and nurturing environments for children",
                      "Distraction free training for vulnerable women and single mothers",
                      "Assure high training completion rates",
                      "Break intergenerational cycles of poverty",
                    ]}
                  />
                  <p>
                    Our goal is not short-term assistance, but durable change -
                    families who are resilient, empowered, and able to shape
                    their own futures.
                  </p>
                </Info>
              </div>
              <div className="priority-box">
                Most TVET programs focus narrowly on skills delivery and assume
                learners can translate training into income independently. CHC
                improves on this approach by designing TVET as a full
                participation-to-outcomes system that removes structural
                barriers to attendance, completion, and post-training success.
              </div>
              <Button href="/donate" tone="light">
                SUPPORT OUR MISSION
              </Button>
            </div>
          </section>
        </>
      );
    case "programs":
      return (
        <>
          <section className="section paper">
            <div className="wrap prose-intro">
              <h2>TVET-WRAP</h2>
              <p>
                TVET-WRAP (Whole-Family Resilience &amp; Advancement Program) is
                a community-owned vocational training program in Kasangati and
                surrounding communities in central Uganda. It helps women,
                single mothers, and out-of-school youth overcome unemployment,
                poverty, and food insecurity, contributing to SDGs 1, 2, 3, 4,
                5, 8, and 10.
              </p>
              <p>
                Rather than offering stand-alone training, it removes the
                barriers that keep vulnerable people from completing a course.
                On-site childcare and early education, daily meals, psychosocial
                support, and sanitary supplies let participants, especially
                young single mothers, focus on learning while their children
                stay safe and nourished. By supporting caregivers and children
                together, it strengthens household stability and sustained
                learning.
              </p>
              <p>
                Training is matched to local labour demand and prioritizes
                practical, immediately usable skills over certification alone.
                Learners choose from tailoring, baking, soap and detergent
                making, metal fabrication, notebook production, hair and
                barbering, and information technology. Entrepreneurship,
                financial literacy, and business mentoring open pathways to
                employment and micro-enterprise.
              </p>
              <p>
                Access is addressed through an entirely community-based delivery
                model, eliminating transportation and cost barriers that
                disproportionately affect women and low-income participants.
                Training is offered in locally relevant trades that do not
                require prior formal education, enabling participation by
                learners with limited literacy or interrupted schooling.
                Currently, participation is free ensuring access for households
                experiencing extreme poverty. even as applicants go through a
                rigorous screening process to ensure only the most deserving
                attend.
              </p>
              <Button href="/impact">LEARN MORE ABOUT OUR IMPACT</Button>
            </div>
            <ProgramGrid />
          </section>
        </>
      );
    case "impact":
      return (
        <>
          <section className="section paper">
            <div className="wrap">
              <div className="section-lead">
                <h2>Impact to date</h2>
                <p>
                  With 782 graduates from 2025, 342 students currently enrolled,
                  and 98% of spending going to programs, CHC is transforming the
                  lives of vulnerable women and youth in rural Uganda.
                </p>
              </div>
              <ImpactStats />
            </div>
          </section>
          <ImpactReports />
          <ImageSection
            image="/images/chs/home-accountability.jpeg"
            title="Canadian Registered Charity"
          >
            <p>Christ’s Hands Centre Society</p>
            <p>Charity registration No: 79734 2367 RR0001</p>
            <p>
              Christ’s hands Centre is accountable to its Canadian and
              international donors. For grant-level reporting or a due-diligence
              conversation, please contact our team directly.
            </p>
          </ImageSection>
        </>
      );
    case "partner":
      return (
        <>
          <TextSection title="Partnerships make whole-family empowerment possible.">
            <p>
              Public and private partners are a key component of CHC’s success.
            </p>
            <p>
              We collaborate with corporations, foundations, government
              agencies, development partners, and other strategic partners to
              deliver integrated skills training and family support to
              vulnerable women, single mothers, youth, and children in
              Kasangati, Uganda. Partnerships may include funding, training
              materials and equipment, in-kind supplies, or professional
              expertise.
            </p>
            <p>
              Beyond critical financial support, many partners contribute the
              materials, tools, and know-how that let us deliver free,
              high-quality vocational training and care to families who have
              nothing to pay.
            </p>
            <p>
              We’re always happy to explore new ways to collaborate. To discuss
              a partnership, send us a partnership enquiry and the right person
              will follow up.
            </p>
            <p>You can also consider a donation in support of our mission.</p>
            <Button href="/donate">DONATE</Button>
          </TextSection>
          <section className="section sand">
            <div className="wrap">
              <h2 className="section-title">By the numbers</h2>
              <ImpactStats />
            </div>
          </section>
          <section className="section paper">
            <div className="wrap">
              <div className="section-lead">
                <h2>Ways to contribute</h2>
                <p>
                  The strongest partnerships match a real operating need with
                  something a partner can provide well.
                </p>
              </div>
              <div className="card-grid four">
                <Info title="Funding">
                  Sponsor a mother, a full program stream, or the meals,
                  childcare, and counselling that support them.
                </Info>
                <Info title="Training materials and equipment">
                  Provide sewing machines, computers, baking supplies, metal
                  fabrication tools, or other equipment suited to our trades.
                </Info>
                <Info title="In-kind supplies">
                  Contribute food, school supplies, fabrics, or the materials
                  used to produce reusable sanitary pads.
                </Info>
                <Info title="Professional expertise">
                  Offer skills that help our team train, mentor, and measure
                  results, from business and financial literacy coaching to
                  counselling and program evaluation.
                </Info>
              </div>
            </div>
          </section>
          <PartnerReasons />
        </>
      );
    case "donate":
      return (
        <>
          <TextSection title="Monthly Giving">
            <h3>Sponsor a mother</h3>
            <p>
              CA$25/month helps one mother to complete a vocational training
              program.
            </p>
            <p>
              Many families in Kasangati survive on one small meal per day.
              Mothers must choose between caring for their children and learning
              a trade. Youth have no access to training that leads to work.
            </p>
            <p>
              CHC’s TVET-WRAP program closes that gap by combining vocational
              training with daily meals, childcare, counselling, and sanitary
              supplies. Training and school are completely free, and all
              instruction is delivered by volunteers.
            </p>
            <p>
              In 2025, funding gaps forced us to pause most programs. Your gift
              can help us support vulnerable women including single mothers in
              rural Uganda.
            </p>
            <blockquote>
              “Families cannot thrive unless both caregivers and children are
              supported together.”
            </blockquote>
          </TextSection>
          <section className="section sand">
            <div className="wrap">
              <div className="section-lead">
                <h2>Monthly gifts and what they support</h2>
                <p>
                  Choose a monthly amount and help mothers complete vocational
                  training programs.
                </p>
              </div>
              <GivingLadder />
              <div className="center">
                <Button href="#give">GIVE MONTHLY</Button>
              </div>
            </div>
          </section>
          <ImageSection
            image="/images/chs/sponsor-mother.jpeg"
            title="CA$300"
            brand
            imageClass="sponsor-mother-photo"
          >
            <h3>
              Enables one mother to complete a vocational training program
            </h3>
            <p>
              Your gift covers one woman’s path from training to income, with
              the materials, meals, childcare for her children, and support she
              needs to graduate.
            </p>
            <p>
              That works out to CA$25 a month for a year. Participants pay
              nothing, and all instruction and administration are delivered by
              volunteers, so your gift goes to the learner.
            </p>
            <blockquote>
              “Women cannot lift themselves out of poverty without practical
              skills, and children cannot thrive without safety, nourishment,
              and care. Help us reach the next mother.”
            </blockquote>
          </ImageSection>
          <section className="section paper" id="giving-ladder">
            <div className="wrap">
              <div className="section-lead">
                <h2>Giving Ladder</h2>
                <p>
                  Every tier enables mothers to complete vocational training
                  programs.
                </p>
              </div>
              <GivingLadder />
              <div className="center">
                <Button href="#give">DONATE NOW</Button>
              </div>
            </div>
          </section>
          <GivingOptions />
        </>
      );
    case "success-stories":
    case "blog":
      return (
        <section className="section paper">
          <div className="wrap">
            <PostGrid posts={posts} />
          </div>
        </section>
      );
    case "contact":
      return (
        <section className="section paper">
          <div className="wrap contact-cards">
            <Info title="Email">
              <EnvelopeSimple size={28} />
              <a href="mailto:Ntonomoreen@christshandsskill.org">
                Ntonomoreen@christshandsskill.org
              </a>
            </Info>
            <Info title="Phone">
              <Phone size={28} />
              <a href="tel:+256704801045">+256704801045</a>
            </Info>
            <Info title="Location">
              <MapPin size={28} />
              <p>Kasangati, Uganda</p>
            </Info>
          </div>
        </section>
      );
    case "privacy-policy":
    case "terms-of-service":
      return (
        <section className="section paper">
          <div className="wrap prose-intro">
            <h2>{pageData[slug].title}</h2>
            <p>Christ’s Hands Centre Society</p>
            <p>Charity registration No: 79734 2367 RR0001</p>
          </div>
        </section>
      );
  }
}

const teamImages = {
  "Ntono Moreen": "/images/chs/team/ntono-moreen.jpg",
  "Tabula Robert": "/images/chs/team/tabula-robert.jpg",
  "Robert Porter": "/images/chs/team/robert-porter.jpg",
};
function Info({ title, children }) {
  const teamImage = teamImages[title];
  return (
    <article className={`info-card${teamImage ? " team-card" : ""}`}>
      {teamImage && (
        <div className="team-photo">
          <Image
            src={teamImage}
            alt={title}
            fill
            sizes="(max-width: 720px) 100vw, 33vw"
          />
        </div>
      )}
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}
function List({ items }) {
  return (
    <ul className="content-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function GoalsGrid() {
  const goals = [
    [
      Briefcase,
      "Equip vulnerable women and youth with market-relevant vocational skills that enable employment, self-employment, and sustainable income generation.",
    ],
    [
      GraduationCap,
      "Ensure children of participating families are safe, nourished, and learning, through integrated childcare, early education, and daily meals.",
    ],
    [
      ForkKnife,
      "Improve household food security and nutrition, recognizing that learning, health, and productivity are impossible without reliable access to food.",
    ],
    [
      HandHeart,
      "Reduce psychosocial distress and prevent family crises by providing counselling, mentorship, and community-based emotional support.",
    ],
    [
      HouseLine,
      "Enable long-term family stability and self-reliance, helping families move from survival to sustainable livelihoods rather than dependency on short-term relief.",
    ],
    [
      UsersThree,
      "Break intergenerational cycles of poverty by supporting both caregivers and children simultaneously, strengthening outcomes across generations.",
    ],
  ];
  return (
    <div className="goals-block">
      <div className="goals-heading">
        <span>06</span>
        <h2>Goals</h2>
      </div>
      <div className="goals-grid">
        {goals.map(([Icon, text], index) => (
          <article className="goal-card" key={text}>
            <div className="goal-icon">
              <Icon size={30} weight="duotone" />
            </div>
            <span>0{index + 1}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
function CrisisSection() {
  return (
    <section className="section crisis-section">
      <div className="crisis-orb crisis-orb-one" />
      <div className="crisis-orb crisis-orb-two" />
      <div className="wrap crisis-layout">
        <div className="crisis-copy">
          <span className="eyebrow">The challenge</span>
          <h2>
            The Poverty, Skills, and Care Crisis Facing Vulnerable Families in
            Uganda
          </h2>
          <p>
            In Kasangati and surrounding communities in Uganda, vulnerable
            women, single mothers, and youth face overlapping crises of extreme
            poverty, food insecurity, unemployment, and lack of childcare and
            education. Many families survive on one small meal per day. Mothers
            are often forced to choose between caring for their children and
            seeking skills or income. Youth lack access to market relevant
            training that could lead to employment or self-reliance.
          </p>
          <p>
            These pressures are not only economic - they are deeply human.
            Chronic hunger, social isolation, and hopelessness have led to
            severe psychosocial distress among young mothers, with tragic
            consequences including suicide in some cases. Without integrated
            support systems, families remain trapped in cycles of poverty and
            crisis.
          </p>
          <div className="crisis-statement">
            Christ’s Hands Centre exists to restore dignity, stability, and
            opportunity by addressing these challenges together - skills, food,
            care, and emotional support - not in isolation
          </div>
          <Button href="/donate" tone="light">
            SUPPORT OUR MISSION
          </Button>
        </div>
        <div className="crisis-visual" aria-hidden="true">
          <div className="crisis-ring">
            <div className="crisis-center">
              <HandHeart size={54} weight="duotone" />
            </div>
            <div className="crisis-node node-one">
              <WarningCircle size={25} weight="duotone" />
              <span>Poverty</span>
            </div>
            <div className="crisis-node node-two">
              <Briefcase size={25} weight="duotone" />
              <span>Skills</span>
            </div>
            <div className="crisis-node node-three">
              <Baby size={25} weight="duotone" />
              <span>Childcare</span>
            </div>
            <div className="crisis-node node-four">
              <ForkKnife size={25} weight="duotone" />
              <span>Food</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function TextSection({ title, children }) {
  return (
    <section className="section paper">
      <div className="wrap prose-intro">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
function ImageSection({
  id,
  image,
  title,
  flip,
  brand,
  imageClass = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`section ${brand ? "brand white-text" : "sand"}`}
    >
      <div className={`wrap split ${flip ? "flip" : ""}`}>
        <div className={`photo ${imageClass}`}>
          <Image src={image} alt="" fill className="cover" />
        </div>
        <div className="split-copy">
          <h2>{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
function ImpactStats() {
  return (
    <div className="stats">
      <Info title="342">
        students currently enrolled (240 adults and 102 children)
      </Info>
      <Info title="782">graduates who completed training</Info>
      <Info title="98%">of expenditure invested directly in programs</Info>
      <Info title="100%">of programs free of charge and volunteer-driven</Info>
    </div>
  );
}
function ProgramGrid() {
  return (
    <div className="wrap program-grid">
      {programs.map((p) => (
        <Link
          href={`/programs/${p.slug}`}
          className="program-card"
          key={p.slug}
        >
          <div className="program-image">
            <Image src={p.image} alt="" fill className="cover" />
          </div>
          <div>
            <span>Since: {p.since}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <strong>Explore the program</strong>
          </div>
        </Link>
      ))}
    </div>
  );
}
function PartnerReasons() {
  const items = [
    [
      "01. Proven Impact",
      "Support a whole-family model which graduated 782 participants in 2025, with 342 students and 102 children currently enrolled, and results you can measure, report, and stand behind.",
    ],
    [
      "02. Exceptional Efficiency",
      "98% of every dollar goes directly to programs, and all instruction and administration are delivered by volunteers.",
    ],
    [
      "03. Sustainability Built In",
      "We equip graduates with entrepreneurship and financial literacy so they launch their own livelihoods, creating income that continues long after the training ends.",
    ],
    [
      "04. Targeted or Broad Support",
      "Direct your partnership to CHC’s overall mission, or target it to a specific program (sewing, baking, IT, soap making, notebook production, hair and barbering, metal fabrication), or to meals, childcare, or sanitary supplies.",
    ],
    [
      "05. Direct Engagement",
      "Contribute more than funding: offer equipment, supplies, expertise, or employee volunteering that strengthens our work on the ground.",
    ],
    [
      "06. Clear Runway to Scale",
      "A proven model, trusted local operations, and a 2026 restart already underway positions us to expand. Five more vocational programs and our family-planning outreach are waiting for funding.",
    ],
    [
      "07. Full Accountability",
      "As a CRA-registered Canadian charity (#79734 2367 RR0001), CHC provides complete charitable accountability, tax receipts for Canadian donors, and reporting on the trainees and programs your gift supports. We are fully eligible for DAF grants and legacy funds.",
    ],
    [
      "08. Public Recognition",
      "Be recognized as a champion of women’s economic empowerment through joint communications, named program recognition, and annual impact updates from the field in Uganda.",
    ],
  ];
  return (
    <section className="section brand white-text">
      <div className="wrap">
        <div className="section-lead">
          <h2>Why partner with Christ’s Hands Centre?</h2>
          <p>
            Our partners help bring skills, nutrition, and care to some of
            Uganda’s most vulnerable families, delivering lasting change one
            learner and one family at a time.
          </p>
        </div>
        <div className="card-grid four">
          {items.map(([t, d]) => (
            <Info title={t} key={t}>
              {d}
            </Info>
          ))}
        </div>
        <h3>Build a partnership, or fund a program today.</h3>
        <div className="buttons">
          <Button href="/contact" tone="light">
            PARTNER WITH US
          </Button>
          <Button href="/donate">DONATE</Button>
        </div>
      </div>
    </section>
  );
}
function GivingOptions() {
  return (
    <section className="section sand" id="ways-to-give">
      <div className="wrap">
        <div className="section-lead">
          <h2>Ways to give</h2>
          <p></p>
        </div>
        <div className="card-grid three">
          <Info title="Donor Advised Fund">
            Recommend a grant from your DAF to support Christ’s Hands Centre’s
            mission. Charity registration No: 79734 2367 RR0001.
          </Info>
          <Info title="Legacy Giving">
            Leave a gift in your will to support Christ’s Hands Centre — beyond
            your lifetime.
          </Info>
          <Info title="Canadian Registered Charity">
            Christ’s Hands Centre Society
            <br />
            Charity registration No: 79734 2367 RR0001
          </Info>
        </div>
      </div>
    </section>
  );
}
