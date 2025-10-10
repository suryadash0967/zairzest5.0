import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FiGithub, FiTwitter } from "react-icons/fi"
import { MdMailOutline } from "react-icons/md"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-head">Want to Know about us ?</div>
        <div className="footer-desc">Come and know more about Zairza and join our community to experience such more amazing stuffs.</div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha. Contact: +91 90786 33785, +91 82988 65794, +91 77518 73289</div>
        <div className="footer-bottom-right">
          <div className="icons">
            <div className="icon">
              <a href="mailto:cet.sac.zairza@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdMailOutline />
              </a>
            </div>
            <div className="icon">
              <a href="https://x.com/zairza_outr" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/zairza.outr/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/zairza-cetb/" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
            </div>

          </div>
          <div className="by-zairza">An event by &nbsp;&nbsp; <img src="https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074322/techevents_gyhidg.png" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
