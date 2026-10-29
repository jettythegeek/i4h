import Link from "next/link";
import {
  ArrowUpRight,
  Bank,
  Buildings,
  CaretDown,
  FileText,
  GearSix,
  HandHeart,
  Heart,
  Plant,
  Receipt,
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

const legacyBenefits = [
  {
    icon: Plant,
    title: "Eternal impact",
    copy: "A gift in your will plants seeds of hope that grow long after your lifetime — empowering vulnerable women and youth and strengthening families in Uganda.",
  },
  {
    icon: Receipt,
    title: "Tax-wise giving",
    copy: "Gifts through your estate — including RRSPs, RRIFs, and life insurance — can significantly reduce the tax burden on your estate while maximizing your charitable impact.",
  },
  {
    icon: HandHeart,
    title: "Your wishes honoured",
    copy: "Christ’s Hands Centre works with your family and advisors to ensure your gift is directed exactly as you intend — with full transparency and grateful stewardship.",
  },
];

const legacyMethods = [
  {
    icon: FileText,
    title: "Will / bequest",
    copy: "The simplest and most common form of legacy giving. You can leave a specific dollar amount, a percentage of your estate, or the residual remainder after other bequests are fulfilled. Your gift can be unrestricted or directed to a specific program.",
  },
  {
    icon: Bank,
    title: "RRSP / RRIF beneficiary designation",
    copy: "Name Christ’s Hands Centre Society as the direct beneficiary of your registered retirement savings or income fund. This bypasses probate and the resulting charitable tax credit can offset income taxes otherwise owed by your estate.",
  },
  {
    icon: Heart,
    title: "Life insurance policy",
    copy: "You can designate Christ’s Hands Centre Society as beneficiary or owner of an existing or new life insurance policy. Naming the charity as owner of a policy may allow you to claim annual premium payments as charitable donations during your lifetime.",
  },
  {
    icon: Buildings,
    title: "Stocks, real estate & other assets",
    copy: "Gifts of appreciated securities, real property, or other assets can be structured through your will or living trust. Donating appreciated assets directly often eliminates capital gains tax while providing a donation credit for the full market value.",
  },
];

export default function DonorAdvisedFund() {
  return (
    <section className="section paper daf-section">
      <div className="wrap">
        <details className="daf-accordion" id="donor-advised-fund">
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

        <details className="daf-accordion legacy-accordion" id="legacy-giving">
          <summary>
            <span className="daf-summary-copy">
              <span className="daf-kicker">WAYS TO GIVE · LEGACY GIVING</span>
              <strong>A gift that endures beyond your lifetime…</strong>
              <span>
                Leave a bequest in your will to empower vulnerable women and
                youth, or name Christ’s Hands Centre Society as beneficiary of
                your RRSP, RRIF, or life insurance. CRA Charity #79734 2367
                RR0001.
              </span>
            </span>
            <span className="daf-summary-toggle" aria-hidden="true">
              <span className="daf-show">SHOW LEGACY GIVING OPTIONS</span>
              <span className="daf-hide">HIDE LEGACY GIVING OPTIONS</span>
              <CaretDown size={22} weight="bold" />
            </span>
          </summary>

          <div className="daf-panel">
            <div className="daf-benefits">
              {legacyBenefits.map(({ icon: Icon, title, copy }) => (
                <article key={title}>
                  <span className="daf-icon">
                    <Icon size={34} weight="duotone" />
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>

            <div className="daf-how legacy-methods-section">
              <p className="eyebrow">WAYS TO LEAVE A LEGACY</p>
              <div className="legacy-methods">
                {legacyMethods.map(({ icon: Icon, title, copy }) => (
                  <article key={title}>
                    <span className="daf-icon">
                      <Icon size={30} weight="duotone" />
                    </span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="daf-how">
              <p className="eyebrow">GETTING STARTED</p>
              <div className="daf-steps legacy-started">
                <article>
                  <span className="daf-step-number">01</span>
                  <h3>Consult your lawyer or notary</h3>
                  <p>
                    We encourage you to work with a qualified lawyer or estate
                    planner to ensure your legacy gift is structured in the way
                    that best serves your family and your charitable
                    intentions. Your advisor can incorporate Christ’s Hands
                    Centre Society into your will, beneficiary designations, or
                    trust documents.
                  </p>
                  <p className="legacy-note">
                    When updating your will, provide your lawyer with our full
                    legal name and charity registration number (see Sample
                    Language below) to ensure accuracy.
                  </p>
                </article>
                <article>
                  <span className="daf-step-number">02</span>
                  <h3>Let us know about your gift</h3>
                  <p>
                    While entirely optional, notifying us of your intention
                    allows Christ’s Hands Centre to thank you, keep you updated
                    on the programs your gift will support, and ensure your
                    wishes are on record. Your decision will be held in complete
                    confidence.
                  </p>
                  <Link className="button brand" href="/contact?enquiry=donation">
                    NOTIFY US CONFIDENTIALLY
                    <ArrowUpRight size={15} weight="bold" />
                  </Link>
                </article>
              </div>
            </div>

            <div className="daf-how legacy-language-section">
              <p className="eyebrow">SAMPLE BEQUEST LANGUAGE</p>
              <p className="legacy-language-intro">
                Your lawyer may use wording similar to the following when
                preparing your will. Please share these examples with your
                estate planner and adapt them as appropriate.
              </p>
              <div className="legacy-language-grid">
                <figure>
                  <figcaption>SPECIFIC DOLLAR AMOUNT</figcaption>
                  <blockquote>
                    “I give to Christ’s Hands Centre Society (CRA Charity
                    Registration #79734 2367 RR0001), 11353 Peregrine Place,
                    Sidney, BC V8L 5S3, Canada, the sum of $________ to be used
                    for its general charitable purposes [or: for the specific
                    purpose of ________].”
                  </blockquote>
                </figure>
                <figure>
                  <figcaption>PERCENTAGE OF ESTATE</figcaption>
                  <blockquote>
                    “I give to Christ’s Hands Centre Society (CRA Charity
                    Registration #79734 2367 RR0001), ________ percent (___%) of
                    the residue of my estate, to be used for its general
                    charitable purposes.”
                  </blockquote>
                </figure>
                <figure>
                  <figcaption>RESIDUAL BEQUEST</figcaption>
                  <blockquote>
                    “I give the residue of my estate (or ________ percent
                    thereof) to Christ’s Hands Centre Society (CRA Charity
                    Registration #79734 2367 RR0001), to be used at the
                    discretion of its board for its general charitable
                    purposes.”
                  </blockquote>
                </figure>
              </div>

              <dl className="daf-charity-details legacy-charity-details">
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
            </div>

            <div className="daf-ready">
              <div>
                <p className="eyebrow">PLAN YOUR LEGACY TODAY</p>
                <h3>Questions about legacy giving?</h3>
                <p>
                  Our team is happy to speak with you in confidence and help
                  connect you with the right advisors for your situation.
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
