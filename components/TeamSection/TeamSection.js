import React from 'react';
import Link from 'next/link';
import Teams from '../../pages/api/team';
import Image from 'next/image';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const TeamSection = props => {
  return (
    <section className={'' + props.hclass}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-12'>
            <div className='section-title text-center'>
              <span>You Can Help The Poor With Us</span>
              <h2>
                Meet the Team <span>Members</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          {Teams.slice(0, 4).map((team, titem) => (
            <div
              className='col-lg-3 col-md-6 col-12 d-flex justify-content-center mb-4'
              key={titem}>
              <div className='vol-card h-100'>
                <div className='image-container'>
                  <Image
                    src={team.timg}
                    alt={team.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 300px'
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                  <span className='hover-icon'>
                    <i className='flaticon-share'></i>
                  </span>
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} href='#'>
                        <i className='flaticon-camera'></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href='#'>
                        <i className='flaticon-facebook-app-symbol'></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href='#'>
                        <i className='flaticon-linkedin'></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href='#'>
                        <i className='flaticon-twitter'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='text p-3'>
                  <h3>
                    <Link
                      onClick={ClickHandler}
                      href={'/volunteer-single/[slug]'}
                      as={`/volunteer-single/\${team.slug}`}>
                      {team.title}
                    </Link>
                  </h3>
                  <span>{team.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='all-btn text-center mt-4'>
          <Link
            onClick={ClickHandler}
            href='/volunteer-1'
            className='theme-btn'>
            All Volunteers
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .vol-card {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite;
          position: relative;
        }

        .vol-card:hover {
          animation-play-state: paused;
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .hover-icon {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 2;
          color: #fff;
          opacity: 0;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .vol-card:hover .hover-icon {
          opacity: 1;
          transform: rotate(360deg);
        }

        .vol-card ul {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 15px;
          padding: 15px;
          background: rgba(0, 0, 0, 0.5);
          transform: translateY(100%);
          transition: all 0.3s ease;
          margin: 0;
          list-style: none;
        }

        .vol-card:hover ul {
          transform: translateY(0);
        }

        .vol-card ul li a {
          color: #fff;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .vol-card ul li a:hover {
          transform: scale(1.2);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .vol-card .text {
          background: #fff;
          text-align: center;
          transition: all 0.3s ease;
        }

        .vol-card:hover .text {
          background: #f8f9fa;
        }

        .vol-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }

        .vol-card:hover h3 {
          color: #007bff;
        }

        .vol-card span {
          color: #666;
          font-size: 0.9rem;
          display: block;
        }

        /* Staggered animations */
        .vol-card:nth-child(1) {
          animation-delay: 0s;
        }
        .vol-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .vol-card:nth-child(3) {
          animation-delay: 0.4s;
        }
        .vol-card:nth-child(4) {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
