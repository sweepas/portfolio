import {useState }from "react";
import ScrollTo from "./ScrollTo";




export function ProjectLinks({}) {


  return <div className="project-links">            
            <ul>
              <li id="about-btn">
                <ScrollTo targetId="about" className="link-btn">
                  <span className="link-span"></span><span>about me</span>
                </ScrollTo>
              </li>
              <li className="project-h">
                <h4>projects</h4>
              </li>
              <li>
                <ScrollTo targetId="nc-news" className="link-btn">
                  <span className="link-span"></span>NC News
                </ScrollTo>
              </li>
              <li>
                
                <ScrollTo targetId="nc-news-api" className='link-btn'>
                  <span className="link-span"></span>NC News API
                </ScrollTo>
              </li>
              <li>
                <ScrollTo targetId="dark" className="link-btn">
                  <span className="link-span"></span>Dark Decent
                </ScrollTo>
              </li>
            </ul>
          </div>;
}
  