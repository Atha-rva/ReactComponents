import React from "react";
import { ZTagPickerDropdown } from "./Components/NewTagDropdown";
import { ZSectionAccordion } from "zitics-core-ui";
import { ZLeftContainer } from "./Components/LeftContainer/LContainer";
import ZBubbleAnimations from "./Components/BubbleAnimations/Animation";
import { useStyles } from "./style";
import TagPickerValidContainer from "./Components/TagPickerwithValidation";
import TagPickerContainer from "./Components/TagPicker";
import DropdownInput from "./Components/DropdownInput";
import CustomDropdown from "./Components/DropdownInput";
import { ZButton } from "./Components/VarientButtons";
import DisplayValue from "./Components/SpinButton";
import ZSpinButton from "./Components/SpinButton";
import TextAreaField from "./Components/TextArea";





const App = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <ZSectionAccordion collaspeHeading='Companies'>
              
      <ZTagPickerDropdown zoptions={["Atharva Private Limited", "Apple",
  "Microsoft",
  "Google",
  "Amazon",
  "Facebook",
  "Tesla",
  "IBM",
  "Intel",
  "Cisco",
  "Oracle",
  "HP",
  "Adobe",
  "Salesforce",
  "SAP",
  "Netflix",
  "Spotify",
  "Uber",
  "Airbnb",
  "Twitter",
  "Snapchat",
  "Zoom",
  "Pinterest",
  "Dropbox",
  "LinkedIn",
  "Slack",
  "Square",
  "Stripe",
  "PayPal",
  "Shopify",
  "eBay",
  "NVIDIA",
  "AMD",
  "Qualcomm",
  "Dell",
  "ASUS",
  "Xiaomi",
  "Sony",
  "LG",
  "Samsung",
  "Alibaba",
  "Baidu",
  "Tencent",
  "TikTok",
  "Hulu",
  "Reddit",
  "GitHub",
  "Bitbucket",
  "Atlassian",
  "WeWork",
  "Palantir"]}/>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at esse reprehenderit, dolorum sapiente dolor ratione asperiores vero quod eos non nesciunt aliquam, nisi modi autem. Delectus corrupti ipsa repudiandae nam cum eveniet a eaque vitae deleniti necessitatibus ut explicabo, vel veniam consequuntur rem obcaecati consequatur omnis dolorem! Accusamus aut maiores fuga reiciendis facilis nulla, excepturi fugiat, quod commodi quasi repellat praesentium. Quis, expedita maxime dolorum necessitatibus velit cupiditate dolores nisi debitis error aut maiores nostrum, sint provident sunt odit atque corrupti totam quas sit fugiat impedit deserunt architecto voluptas unde. Molestiae odit sint enim magni, fugiat id laudantium quibusdam.</span>
          <ZTagPickerDropdown zoptions={["Atharva Private Limited", "Apple",
  "Microsoft",
  "Google",
  "Amazon",
  "Facebook",
  "Tesla",
  "IBM",
  "Intel",
  "Cisco",
  "Oracle",
  "HP",
  "Adobe",
  "Salesforce",
  "SAP",
  "Netflix",
  "Spotify",
  "Uber",
  "Airbnb",
  "Twitter",
  "Snapchat",
  "Zoom",
  "Pinterest",
  "Dropbox",
  "LinkedIn",
  "Slack",
  "Square",
  "Stripe",
  "PayPal",
  "Shopify",
  "eBay",
  "NVIDIA",
  "AMD",
  "Qualcomm",
  "Dell",
  "ASUS",
  "Xiaomi",
  "Sony",
  "LG",
  "Samsung",
  "Alibaba",
  "Baidu",
  "Tencent",
  "TikTok",
  "Hulu",
  "Reddit",
  "GitHub",
  "Bitbucket",
  "Atlassian",
  "WeWork",
              "Palantir"]} />
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sed consequuntur at nulla numquam ea facilis voluptate natus, dolorum quae, nesciunt tenetur quam quod debitis id tempore! Quaerat exercitationem, obcaecati fuga sequi voluptas atque maxime, quos expedita consequuntur ullam porro consectetur dolor esse neque sit ut vitae, nisi qui necessitatibus fugit! At, est ex facilis rerum corporis veniam repellat delectus, numquam aliquid quae, id praesentium magnam? Minus aperiam iure quo distinctio? Vitae quos quam, a suscipit dolore soluta impedit rem inventore blanditiis eius consequatur laboriosam, labore omnis quasi, ducimus debitis fuga nesciunt unde animi dolor officia incidunt! Provident repudiandae natus corrupti delectus tempora, eius voluptates dicta repellat, aliquam excepturi ea tenetur fugiat illo totam sit error ab culpa autem et accusantium repellendus. Aliquam explicabo labore dolorum provident nam, magnam quibusdam accusamus, sapiente aspernatur iure numquam? Non ducimus velit omnis, molestiae, sit consectetur quibusdam ut molestias accusamus blanditiis, pariatur cupiditate similique tempore dicta. Porro quam consectetur inventore, exercitationem doloribus, similique in reprehenderit, corrupti quibusdam id veritatis iure nam molestias doloremque aliquid ea temporibus magni? Beatae rem modi repellat expedita dolore ratione perferendis obcaecati quos! Fuga inventore non magnam ullam sapiente minima, tempora suscipit consequuntur veniam quos cum. Quis nobis, dolore beatae excepturi facere rerum velit impedit dolorem earum tenetur tempora, eos obcaecati, dolores deserunt optio consequuntur! Maxime, autem odio ad quibusdam aliquid reprehenderit laborum, animi cumque ducimus dolore, itaque molestias! Quam cupiditate qui sit autem, laborum iusto fugiat ea minima impedit harum sapiente velit dolores veritatis eveniet totam quasi voluptates voluptatibus atque inventore dignissimos quae? Labore numquam molestiae illum accusamus, dolorum et magni aliquam enim ad esse, id perspiciatis asperiores aperiam voluptates quidem explicabo voluptatum, temporibus quos consequuntur a possimus fugiat ipsa impedit? Labore veniam numquam laudantium nemo excepturi ipsam iure quas ipsa est natus qui, nesciunt eligendi et voluptatem eos quia dolor. Quos cumque et iure numquam dignissimos repellat nostrum error consequatur quam consequuntur. Dolorem maxime sunt id? Molestiae minima consectetur odit. Laborum sit at recusandae? Sed a incidunt voluptatem, voluptate obcaecati, consequatur magnam accusantium minus rerum modi eos hic impedit ipsam reiciendis labore illo ad debitis, odit adipisci at. Necessitatibus unde hic fuga, quis soluta at eum ipsum nulla sequi porro voluptatum veritatis ea facere, nostrum eius iusto mollitia expedita asperiores corrupti illo repellendus sapiente. Ut autem sequi placeat nesciunt velit quasi tempore delectus similique dolorem natus? Laudantium tempore earum magnam est sapiente rerum soluta velit veniam doloribus, cupiditate saepe non enim praesentium, vitae nihil vel dolorem quam, accusamus consectetur magni. Similique, iusto, commodi cupiditate quae placeat quod quidem rerum vitae voluptatum laborum, laboriosam officiis quis dolores aliquam veniam voluptates pariatur quo molestiae dignissimos porro ea fugiat corporis? Saepe mollitia sapiente error inventore iusto culpa, ut alias quia nam repellendus laudantium quae eos corporis eum sunt numquam. Numquam, magni itaque hic quaerat aperiam amet similique placeat rem facere maiores perspiciatis quia, vel iusto cum officia non, libero temporibus asperiores. Aspernatur blanditiis tempore impedit fuga eum doloribus magni eligendi, cupiditate voluptates, harum itaque dicta placeat nam ad nisi delectus quod!</span>
          </ZSectionAccordion> */}
      {/* <div style={{width:"50vw", height:"90vh"}}>
      <ZLeftContainer contentType={'image'}>
          Collaborative Tech Finance Platform
          
      </ZLeftContainer>
      </div> */}
      {/* <ZBubbleAnimations className={classes.ZLContainerCompoent} /> */}
      {/* <TagPickerValidContainer className={''} fieldName={'Companies'}/> */}
      {/* <TagPickerContainer className={""} fieldName={"GSTIN"} /> */}
      {/* <CustomDropdown/> */}
      {/* <ZButton variant="colorHold">Atharva</ZButton> */}
      {/* <CustomDropdown/> */}
      {/* <ZSpinButton zlabel={"Companies"} zmin={0} zmax={12} zdisabled={false} zdefaultvalue={0} zhide={false} /> */}
      <TextAreaField zlabel="Purpose" placeholder="Enter Purpose" />
    </div>
  );
};

export default App;
