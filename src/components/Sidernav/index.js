import React from "react";
import { StatusBar, ScrollView,Animated } from "react-native";
import Imagem from "../../../assets/profile.png";
import Plim from "../../../assets/plim_plim.png";
import Friends from "../../../assets/friend.png";
import Gift from "../../../assets/gift.png";
import GloboPlay from "../../../assets/globo-play.png";
import Globo from "../../../assets/globo.com.png";
import GShow from "../../../assets/gshow.png";
import GE from "../../../assets/ge.png";
import G1 from "../../../assets/g1.png";
import oGlobo from "../../../assets/o-globo.png";
import Add from "../../../assets/plus.png";

import {
  StatuscNav,
  Profile,
  View,
  Img,
  Title,
  TextName,
  ViewContent,
  ViewWrapper,
  Notification,
  ViewCard,
  PanalAdd,
  ViewStory,
} from "../../Layout/Application/element";

export default function Sidernav() {
  
      return (
        <ViewWrapper>
        <Notification>
        <ViewCard>
          <Img source={Imagem} />
        </ViewCard>
          <ViewCard>

            <Img source={Plim} />

          </ViewCard>
          <ViewCard>
            <Img source={Friends} />
          </ViewCard>

          <ViewCard>

            <Img source={Gift} />
          </ViewCard>

        </Notification>

        <ScrollView scrollEventThrottle={16} vertical={true} showsVerticalScrollIndicator={false}>
         
          <ViewCard>

            <Img source={GloboPlay} />

          </ViewCard>

          <ViewCard>

            <Img source={Globo} />
          </ViewCard>

          <ViewCard>

            <Img source={GShow} />
          </ViewCard>

          <ViewCard>

            <Img source={G1} />

          </ViewCard>
          <ViewCard>

            <Img source={oGlobo} />
          </ViewCard>

          <ViewCard>

            <Img source={GE} />
          </ViewCard>

        </ScrollView>

        <PanalAdd>

        <ViewCard>

          <Img source={Add} />

           </ViewCard>

        </PanalAdd>

      </ViewWrapper>

    
    
    
    
    
    
      )
    }
    






