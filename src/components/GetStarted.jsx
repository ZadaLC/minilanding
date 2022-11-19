import styles from "../style";
import { arrowUp } from "../assets";
const url = "https://discord.com/api/oauth2/authorize?client_id=1042453396281626664&permissions=0&scope=bot%20applications.commands"
const GetStarted = () => (
  <a href={url} target="_blank" rel="noopener noreferrer">
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">A-Bot</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
{/*       
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Invite</span>
      </p> */}
    </div>
  </div>
  </a>
);

export default GetStarted;
