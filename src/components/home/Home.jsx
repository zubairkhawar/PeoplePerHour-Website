import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="landingpage">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-large">
              <div className="text-content">
                <h1>Make bright ideas happen</h1>
                <h3>
                  Access global talent on the freelancer website trusted by over 1 million businesses worldwide.
                </h3>
                <form method="POST" className="search-bar">
                  <input type="search" placeholder="Try Web Development" className="button-search" />
                  <button type="submit" className="button-search-svg">
                    <svg fill="#69728C" width="24" height="24" viewBox="0 0 1024 1024">
                    <path d="M755.499 695.168l128 128c7.41 7.665 11.977 18.12 11.977 29.641 0 23.564-19.103 42.667-42.667 42.667-11.521 0-21.976-4.567-29.653-11.989l0.012 0.012-128-128c-7.41-7.665-11.977-18.12-11.977-29.641 0-23.564 19.103-42.667 42.667-42.667 11.521 0 21.976 4.567 29.653 11.989l-0.012-0.012zM426.667 85.333c188.513 0 341.333 152.82 341.333 341.333s-152.82 341.333-341.333 341.333v0c-188.513 0-341.333-152.82-341.333-341.333s152.82-341.333 341.333-341.333v0zM426.667 170.667c-141.385 0-256 114.615-256 256s114.615 256 256 256v0c141.385 0 256-114.615 256-256s-114.615-256-256-256v0z"></path>

                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-large">
              <div className="image">
                <picture>
                  <img src="https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-1/hero-instance-1--desktop.png" sizes="100vw" width="760" height="618" alt="Hero Image" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="all-categories">
        <div className="column-3">
          
          <div className="column-3-title">
            <h2>Most popular categories</h2>
          </div>
          
          <div role="listbox" tabIndex={0} className="column-box">
            <ul className="list-box">
              <li className="box-list" style={{ flex: '0 0 13.5rem', marginRight: '0.75rem' }}>
                <div className="card">
                  <picture>
                    <img src="https://dw3i9sxi97owk.cloudfront.net/homepage/categories/digitalMarketing/seo@1x.jpg" alt="Seo" loading="lazy" width={216} height={288} />
                  </picture>
                  <a href="#" className="card-link">
                    <h4>Boost your traffic</h4>
                    <h3>SEO</h3>
                  </a>
                </div>
              </li>
              <li className="box-list" style={{ flex: '0 0 13.5rem', marginRight: '0.75rem' }}>
                <div className="card">
                  <picture>
                    <img src="https://dw3i9sxi97owk.cloudfront.net/homepage/categories/writingTranslation/content-writing@1x.jpg" alt="content writing" loading="lazy" width={216} height={288} />
                  </picture>
                  <a href="#" className="card-link">
                    <h4>Elevate your community</h4>
                    <h3>Content Writinf</h3>
                  </a>
                </div>
              </li>
              <li className="box-list" style={{ flex: '0 0 13.5rem', marginRight: '0.75rem' }}>
                <div className="card">
                  <picture>
                    <img src="https://dw3i9sxi97owk.cloudfront.net/homepage/categories/technologyProgramming/website-development@1x.jpg" alt="website development" loading="lazy" width={216} height={288} />
                  </picture>
                  <a href="#" className="card-link">
                    <h4>Build your Site</h4>
                    <h3>Website Development</h3>
                  </a>
                </div>
              </li>
              <li className="box-list" style={{ flex: '0 0 13.5rem', marginRight: '0.75rem' }}>
                <div className="card">
                  <picture>
                    <img src="https://dw3i9sxi97owk.cloudfront.net/homepage/categories/design/logo-design@1x.jpg" alt="logodesign" loading="lazy" width={216} height={288} />
                  </picture>
                  <a href="#" className="card-link">
                    <h4>Elevate your brand</h4>
                    <h3>Logo Design</h3>
                  </a>
                </div>
              </li>
              <li className="box-list" style={{ flex: '0 0 13.5rem', marginRight: '0.75rem' }}>
                <div className="card">
                  <picture>
                    <img src="https://dw3i9sxi97owk.cloudfront.net/homepage/categories/musicAudio/voice-over@1x.jpg" alt="voiceover" loading="lazy" width={216} height={288} />
                  </picture>
                  <a href="#" className="card-link">
                    <h4>Tell your story</h4>
                    <h3>Voice-Over</h3>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="categories-link">
            <a href="" >All CATEGORIES
            <svg fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024" className="button-icon-categories">
              <path d="M584.832 225.835l256 256c7.718 7.721 12.492 18.386 12.492 30.165s-4.774 22.445-12.492 30.165l-256 256c-7.665 7.41-18.12 11.977-29.641 11.977-23.564 0-42.667-19.103-42.667-42.667 0-11.521 4.567-21.976 11.989-29.653l-0.012 0.012 183.125-183.168h-494.293c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667v0h494.293l-183.125-183.168c-8.036-7.769-13.026-18.647-13.026-30.69 0-23.564 19.103-42.667 42.667-42.667 12.043 0 22.92 4.989 30.678 13.014l0.012 0.012z"></path>
            </svg>
            </a>
          </div>
        </div>
      </section>
      <div className="promotion-row">
  <section className="promotion-content">
    <div className="promotion-text">
      <h2 className="promotion-header">Getting work done has never been easier</h2>
      <ul>
        <li>
          <svg fill="#69728C" width={24} height={24} viewBox="0 0 1024 1024">
          <path d="M418.944 707.2l357.589-476.8c7.867-10.41 20.223-17.067 34.133-17.067 23.564 0 42.667 19.103 42.667 42.667 0 9.653-3.206 18.558-8.611 25.707l0.078-0.107-384 512c-7.867 10.4-20.217 17.050-34.121 17.050-10.134 0-19.442-3.533-26.761-9.434l0.082 0.064-213.333-170.667c-10.394-7.868-17.040-20.214-17.040-34.113 0-23.564 19.103-42.667 42.667-42.667 10.602 0 20.301 3.867 27.764 10.268l-0.057-0.048 178.944 143.147z"></path>
          </svg>
          <span>Get matched with expert freelancers in minutes</span>
        </li>
        <li>
          <svg fill="#69728C" width={24} height={24} viewBox="0 0 1024 1024">
          <path d="M418.944 707.2l357.589-476.8c7.867-10.41 20.223-17.067 34.133-17.067 23.564 0 42.667 19.103 42.667 42.667 0 9.653-3.206 18.558-8.611 25.707l0.078-0.107-384 512c-7.867 10.4-20.217 17.050-34.121 17.050-10.134 0-19.442-3.533-26.761-9.434l0.082 0.064-213.333-170.667c-10.394-7.868-17.040-20.214-17.040-34.113 0-23.564 19.103-42.667 42.667-42.667 10.602 0 20.301 3.867 27.764 10.268l-0.057-0.048 178.944 143.147z"></path>

          </svg>
          <span>Dedicated 24/7 customer service team</span>
        </li>
        <li>
          <svg fill="#69728C" width={24} height={24} viewBox="0 0 1024 1024">
          <path d="M418.944 707.2l357.589-476.8c7.867-10.41 20.223-17.067 34.133-17.067 23.564 0 42.667 19.103 42.667 42.667 0 9.653-3.206 18.558-8.611 25.707l0.078-0.107-384 512c-7.867 10.4-20.217 17.050-34.121 17.050-10.134 0-19.442-3.533-26.761-9.434l0.082 0.064-213.333-170.667c-10.394-7.868-17.040-20.214-17.040-34.113 0-23.564 19.103-42.667 42.667-42.667 10.602 0 20.301 3.867 27.764 10.268l-0.057-0.048 178.944 143.147z"></path>
          </svg>
          <span>Money back guarantee and anti-fraud protection</span>
        </li>
      </ul>
      <div className="promotion-button">
        <a href="/site/register?hasBuyerMemberPreselected=1">Start now for free</a>
      </div>
    </div>
    <div className="promotion-image">
      <picture>
        <img src="https://dw3i9sxi97owk.cloudfront.net/homepage/businessStats/collage-work--desktop.jpg" width={600} height={330} loading="lazy" alt="Promotion Image" />
      </picture>
    </div>
  </section>
</div>
      
    </div>
  );
}

export default Home;