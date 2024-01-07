function Project()
{
    return (
      <>
        <div className="container" style={{minHeight:'650PX'}}>
            <div style={{textAlign:'center',marginTop:'60px',marginBottom:'20px'}}>
                <h1 className="project-heading">
                    My Recent <strong className="yellow">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
            </div>
          
          <div className="row" style={{ justifyContent: "center", paddingBottom: 10 }}>
            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img  className="card-img-top"  src="/static/media/chatify.7206044e0b5cdad44726.png"  alt="card-img"/>
                <div className="card-body">
                  <div className="card-title h5">Chatify</div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Personal Chat Room or Workspace to share resources and
                    hangout with friends build with react.js, Material-UI, and
                    Firebase. Have features which allows user for realtime
                    messaging, image sharing as well as supports reactions on
                    messages.
                  </p>
                  <a role="button"   tabIndex={0}   href="https://github.com/soumyajit4419/Chatify"   target="_blank"   className="btn btn-primary">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>{" "}
                    &nbsp;GitHub
                  </a>
                  <a
                    role="button"
                    tabIndex={0}
                    href="https://chatify-49.web.app/"
                    target="_blank"
                    className="btn btn-primary"
                    style={{ marginLeft: 10 }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
                        fill="currentColor"
                      />
                    </svg>{" "}
                    &nbsp;Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img
                  className="card-img-top"
                  src="/static/media/blog.fb8ab7f271a937d5fc01.png"
                  alt="card-img"
                />
                <div className="card-body">
                  <div className="card-title h5">Bits-0f-C0de</div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    My personal blog page build with Next.js and Tailwind Css
                    which takes the content from makdown files and renders it
                    using Next.js. Supports dark mode and easy to write blogs
                    using markdown.
                  </p>
                  <a
                    role="button"
                    tabIndex={0}
                    href="https://github.com/soumyajit4419/Bits-0f-C0de"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>{" "}
                    &nbsp;GitHub
                  </a>
                  <a
                    role="button"
                    tabIndex={0}
                    href="https://blogs.soumya-jit.tech/"
                    target="_blank"
                    className="btn btn-primary"
                    style={{ marginLeft: 10 }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
                        fill="currentColor"
                      />
                    </svg>{" "}
                    &nbsp;Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img
                  className="card-img-top"
                  src="/static/media/codeEditor.1b585492490c8c1cace9.png"
                  alt="card-img"
                />
                <div className="card-body">
                  <div className="card-title h5">Editor.io</div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Online code and markdown editor build with react.js. Online
                    Editor which supports html, css, and js code with instant
                    view of website. Online markdown editor for building README
                    file which supports GFM, Custom Html tags with toolbar and
                    instant preview.Both the editor supports auto save of work
                    using Local Storage
                  </p>
                  <a
                    role="button"
                    tabIndex={0}
                    href="https://github.com/soumyajit4419/Editor.io"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>{" "}
                    &nbsp;GitHub
                  </a>
                  <a
                    role="button"
                    tabIndex={0}
                    href="https://editor.soumya-jit.tech/"
                    target="_blank"
                    className="btn btn-primary"
                    style={{ marginLeft: 10 }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
                        fill="currentColor"
                      />
                    </svg>{" "}
                    &nbsp;Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Project