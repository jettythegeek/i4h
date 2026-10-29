import Link from "next/link";
import {
  ArrowUpRight,
  CaretDown,
  GearSix,
  Plant,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted stewardship",
    copy: "Christ’s Hands Centre Society is a CRA-registered Canadian charity. Every dollar is directed to vocational skills training, nutrition, childcare, and community support, with full transparency and accountability.",
  },
  {
    icon: GearSix,
    title: "Seamless process",
    copy: "Our team works directly with your DAF sponsor to make the grant process as smooth as possible. Most grants can be completed in just a few steps.",
  },
  {
    icon: Plant,
    title: "Lasting impact",
    copy: "Your grant empowers vulnerable women and youth with market-relevant skills and whole-family support — creating self-reliance that extends across generations and communities.",
  },
];

const faqs = [
  {
    question: "Can I recommend a grant to a specific program at Christ’s Hands Centre?",
    answer: "Yes. You are welcome to designate your grant toward a specific program such as vocational training, meals and nutrition, childcare and early education, psychosocial support, or general operations. Please mention your preference when you notify us, and we will do our best to honour it.",
  },
  {
    question: "Will I receive a tax receipt for my DAF grant?",
    answer: "Tax receipts for DAF grants are issued by your DAF sponsor, not by Christ’s Hands Centre Society. Please check with your sponsoring organization regarding receipting. We will send an acknowledgement letter confirming receipt of the grant.",
  },
  {
    question: "How long does it take for my grant to reach Christ’s Hands Centre?",
    answer: "Processing times vary by DAF sponsor — most grants arrive within 2–4 weeks. Notifying us after you submit your recommendation helps us track and acknowledge the gift promptly.",
  },
  {
    question: "Can U.S.-based DAF holders give to Christ’s Hands Centre?",
    answer: "Christ’s Hands Centre Society is a Canadian charity, and some U.S. DAF sponsors can make international grants. Please check with your DAF sponsor about its cross-border giving policies. Fidelity Charitable, Schwab Charitable, and National Christian Foundation may be useful starting points.",
  },
  {
    question: "Can I set up a recurring annual grant from my DAF?",
    answer: "Yes. Many DAF sponsors offer the option to schedule recurring grant recommendations. Simply set Christ’s Hands Centre Society as a recurring beneficiary through your DAF account, or contact us to discuss how to set this up.",
  },
];

export default function DonorAdvisedFund() {
  return (
    <section className="section paper daf-section" id="donor-advised-fund">
      <div className="wrap">
        <details className="daf-accordion">
          <summary>
            <span className="daf-summary-copy">
              <strong>Give through your donor advised fund</strong>
              <span>
                Recommend a grant with no processing fee, as a one-time gift or
                a recurring annual disbursement, to a CRA-registered Canadian
                charity. CRA Charity #79734 2367 RR0001.
              </span>
            </span>
            <span className="daf-summary-toggle" aria-hidden="true">
              <span className="daf-show">
                SHOW HOW TO GIVE THROUGH YOUR DAF
              </span>
              <span className="daf-hide">
                HIDE HOW TO GIVE THROUGH YOUR DAF
              </span>
              <CaretDown size={22} weight="bold" />
            </span>
          </summary>

          <div className="daf-panel">
            <div className="daf-benefits">
              {benefits.map(({ icon: Icon, title, copy }) => (
                <article key={title}>
                  <span className="daf-icon">
                    <Icon size={34} weight="duotone" />
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>

            <div className="daf-how">
              <p className="eyebrow">HOW TO GIVE</p>
              <div className="daf-steps">
                <article>
                  <span className="daf-step-number">01</span>
                  <h3>Recommend a grant using our charity details</h3>
                  <p>
                    Log in to your DAF account or call your sponsoring
                    organization and initiate a grant recommendation to
                    Christ’s Hands Centre Society, using the following
                    information to complete the recommendation form:
                  </p>
                  <dl className="daf-charity-details">
                    <div>
                      <dt>Registered charity name</dt>
                      <dd>Christ’s Hands Centre Society</dd>
                    </div>
                    <div>
                      <dt>CRA charity registration number</dt>
                      <dd>79734 2367 RR0001</dd>
                    </div>
                    <div>
                      <dt>Mailing address</dt>
                      <dd>11353 Peregrine Place, Sidney, BC V8L 5S3, Canada</dd>
                    </div>
                    <div>
                      <dt>Contact email</dt>
                      <dd>
                        <a href="mailto:Ntonomoreen@christshandsskill.org">
                          Ntonomoreen@christshandsskill.org
                        </a>
                      </dd>
                    </div>
                  </dl>
                </article>

                <article>
                  <span className="daf-step-number">02</span>
                  <h3>Notify Christ’s Hands Centre of your gift</h3>
                  <p>
                    Once you’ve submitted your grant recommendation, please let
                    us know so we can acknowledge your generosity and keep you
                    updated on the impact of your gift.
                  </p>
                  <Link className="button brand" href="/contact?enquiry=donation">
                    NOTIFY US <ArrowUpRight size={15} weight="bold" />
                  </Link>
                </article>
              </div>
            </div>

            <div className="daf-faqs">
              <p className="eyebrow">FAQS &amp; HELPFUL TIPS</p>
              <div className="daf-faq-list">
                {faqs.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>
                      <span>{question}</span>
                      <CaretDown size={20} weight="bold" aria-hidden="true" />
                    </summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="daf-ready">
              <div>
                <p className="eyebrow">READY TO GIVE?</p>
                <h3>Questions about giving through your DAF?</h3>
                <p>
                  Our team is happy to assist you and coordinate directly with
                  your DAF sponsor.
                </p>
              </div>
              <Link className="button brand" href="/contact?enquiry=donation">
                CONTACT US <ArrowUpRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
