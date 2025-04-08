import type React from "react"

const Skills: React.FC = () => {

  return (
      <>
        <div className="skills-content">
          <h1>skills & experience</h1>

          <section className="skills-section">
            <svg className="border-animation" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="1" y="1" width="98" height="98"/>
            </svg>
            <h2>experiences (technical)</h2>

            <div className="skills-tree">
              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div className="skill-content">
                  <h3>server infrastructure</h3>
                  <ul>
                    <li>Azure</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                  </ul>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <line x1="6" y1="3" x2="6" y2="15"></line>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>ci/cd</h3>
                  <ul>
                    <li>ArgoCD</li>
                    <li>Bitbucket Pipelines</li>
                    <li>Azure DevOps</li>
                    {/* Assuming "azure" refers to Azure DevOps here */}
                  </ul>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M12 12v9"></path>
                    <path d="m16 16-4-4-4 4"></path>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>manual deployment</h3>
                  <ul>
                    <li>Apache</li>
                    <li>Nginx</li>
                  </ul>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <path d="M21 2v6h-6"></path>
                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                    <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
                  </svg>
                </div>
                <div className="skill-content">
                  <h3>nodejs deployment</h3>
                  <p>with reverse proxy</p>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>e-commerce</h3>
                  <ul>
                    <li>Shopware</li>
                    <li>Silverstripe-based systems</li>
                  </ul>
                </div>
              </div>

              <div className="skill-item has-sub-items">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="skill-content">
                  <h3>rest apis</h3>
                  <ul>
                    <li>
                      NestJS
                    </li>
                    <li>
                      Express
                    </li>
                    <li>
                      Silverstripe
                    </li>
                  </ul>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>api integration</h3>
                  <ul>
                    <li>GraphQL</li>
                    <li>REST</li>
                    <li>SOAP</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="skills-section">
            <svg className="border-animation" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="1" y="1" width="98" height="98"/>
            </svg>
            <h2>technology stack @ <a href={'https://www.cic.at/'}><u>cic</u></a></h2>

            <div className="skills-tree">
              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>frontend</h3>
                  <ul>
                    <li>React (Gatsby)</li>
                    <li>Next.js</li>
                    <li>Twig templates (Shopware)</li>
                    <li>Silverstripe templates</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Shadcn UI</li>
                    <li>Custom Design</li>
                  </ul>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>backend</h3>
                  <ul>
                    <li>NestJS</li>
                    <li>Silverstripe Framework</li>
                    <li>Express</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="skills-section">
            <svg className="border-animation" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="1" y="1" width="98" height="98"/>
            </svg>
            <h2>technology stack private</h2>

            <div className="skills-tree">
              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>web frontend</h3>
                  <ul>
                    <li>React</li>
                    <li>Svelte</li>
                    <li>Next.js</li>
                    <li>Vue.js</li>
                    {/* Added .js for consistency */}
                  </ul>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>web backend</h3>
                  <ul>
                    <li>Pocketbase</li>
                    <li>Express</li>
                    <li>NestJS</li>
                  </ul>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <line x1="22" y1="12" x2="2" y2="12"></line>
                    <path
                        d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
                  </svg>
                </div>
                <div className="skill-content with-sub-items">
                  <h3>system-level</h3>
                  <ul>
                    <li>C (low-level programming language)</li>
                    <li>C++ (g++ wrapper, JSON/XML/CSV linter)</li>
                    <li>Java (game modding, JetBrains plugins)</li>
                    <li>Swift</li>
                    <li>Rust</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

      </>
  )
}

export default Skills
