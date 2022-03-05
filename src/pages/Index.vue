<template>
  <q-page>
    <div class="row justify-center col-12 bg">
      <div class="widthScreen q-pa-md">
        <div class="row q-mt-lg">
          <div class="col-12 col-md-7 q-mt-md">
            <p class="text-h2 text-bold text-color">
              Meet a Nonprofit <br> Working to End <br> the Dog Meat Trade <br> in Africa and Asia
            </p>
            <p class="q-mt-md text-h6">
              Our goal is to put an end to cruel meat industry claims the lives of millions of dogs and cats each year.
            </p>
            <div class="row">
              <q-btn label="Donate" class="col-5" rounded outline color="teal"/>
            </div>
          </div>
          <div class="col-10 col-md-5 q-pa-md">
            <q-img :ratio="1" src="https://dogmeatsurvivor.org/images/banner-dog.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-lg text-center text-red-6 text-h5">
      SAVE THE INNOCENT VICTIMS OF THE DOG MEAT TRADE!
    </div>
    <div class="bg-grey-2 row justify-center">
      <div class="widthScreen q-pa-md row">
        <div class="col-12 col-sm-6 q-pa-md">
          <q-img :ratio="16/9" src="https://dogmeatsurvivor.org/images/dog-1.png" />
          <div class="row q-mt-md">
            <div class="col-6 q-pr-sm">
              <q-img :ratio="16/9" src="https://dogmeatsurvivor.org/images/dog-2.png" />
            </div>
            <div class="col-6 q-pl-sm">
              <q-img :ratio="16/9" src="https://dogmeatsurvivor.org/images/dog-3.png" />
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 q-pa-md">
          <p class="text-h4">The Issue</p>
          <p>Dog and cat traders snatch animals from the streets, steal pets from backyards. They are crammed together on the back of trucks and driven for days—sick, hungry, thirsty, injured and afraid—then beaten to death or hanged in slaughterhouses or markets. In Ghana, dogs are bred in barren cages, without proper food, water or protection from the elements. Most people across Africa don’t eat dog or cat, and DogMeatSurvivors is working with local groups to lobby for change.</p>
          <p class="text-h6">No food</p>
          <p class="text-h6">No Water</p>
          <p class="text-h6">Beaten and Electrocuted</p>
          <p class="text-h6">Boiled Alive</p>
          <p class="text-h6">Used as Food</p>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="widthScreen q-pa-md row">
        <span class="text-center col-12 text-h4 text-blue-grey-4">DONATE NOW AND SAVE <br /> INNOCENT ANIMALS</span>
        <div class="row col-12 q-mt-md">
          <div class="col-6 col-md-3">
            <q-card class="q-ma-md q-pa-md text-center">
              <div class="row justify-center q-py-md">
                <q-img class="col-6 img-cat" src="~assets/cat.png"/>
              </div>
              <p class="q-mt-sm">1 DOG RESCUED</p>
              <p class="q-mt-sm text-bold">$9.95</p>
              <div class="row justify-center q-mt-lg q-mb-sm">
                <q-btn label="donate" color="red" class="col-12" rounded icon-right="favorite" />
              </div>
            </q-card>
          </div>
          <div class="col-6 col-md-3">
            <q-card class="q-ma-md q-pa-md text-center">
              <div class="row justify-center q-py-md">
                <q-img class="col-6 img-cat" src="~assets/cat.png"/>
              </div>
              <p class="q-mt-sm">2 DOG RESCUED</p>
              <p class="q-mt-sm text-bold">$19.90</p>
              <div class="row justify-center q-mt-lg q-mb-sm">
                <q-btn label="donate" color="red" class="col-12" rounded icon-right="favorite" />
              </div>
            </q-card>
          </div>
          <div class="col-6 col-md-3">
            <q-card class="q-ma-md q-pa-md text-center">
              <div class="row justify-center q-py-md">
                <q-img src="~assets/cat.png" width="60px"/>
              </div>
              <p class="q-mt-sm">5 DOG RESCUED</p>
              <p class="q-mt-sm text-bold">$49.75</p>
              <div class="row justify-center q-mt-lg q-mb-sm">
                <q-btn label="donate" color="red" class="col-12" rounded icon-right="favorite" />
              </div>
            </q-card>
          </div>
          <div class="col-6 col-md-3">
            <q-card class="q-ma-md q-pa-md text-center">
              <div class="row justify-center q-py-md">
                <q-img src="~assets/cat.png" width="60px"/>
              </div>
              <p class="q-mt-sm">10+ DOG RESCUED</p>
              <p class="q-mt-sm text-bold">$98.50</p>
              <div class="row justify-center q-mt-lg q-mb-sm">
                <q-btn label="donate" color="red" class="col-12" rounded icon-right="favorite" />
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-lg bg-teal text-center text-white text-h5">
      Every year, roughly 30 million cats are slaughtered and eaten by humans around the world.
    </div>
    <div class="row justify-center">
      <div class="widthScreen q-pa-md row">
        <div class="col-12 col-sm-6 q-pa-md">
          <q-img :ratio="16/9" src="https://dogmeatsurvivor.org/images/dog-meat-1.png"/>
          <q-img :ratio="16/9" class="q-mt-md" src="https://dogmeatsurvivor.org/images/dog-meat-2.png"/>
        </div>
        <div class="col-12 col-sm-6 q-pa-md">
          <p class="text-h5">Dog meat trade facts:</p>
          <p class="q-mt-md">Our African partner activists work all year round to rescue thousands of dogs and cats from the meat trade. Whether crammed onto trucks—where they endure dehydration, starvation, broken limbs, shock and disease—or huddled in the corner of a filthy slaughterhouse, our activist partners are these animals’ last hope.</p>
          <p class="q-mt-md">In Ghana, dogs are killed by electrocution; elsewhere, they are usually bludgeoned, hanged or more rarely, boiled alive.</p>
          <p class="q-mt-md">Across Asia and Africa, there is increasingly vocal local opposition to this trade due to cruelty, criminality and human health concerns.</p>
          <p class="q-mt-md">Dog meat is mainly, but not exclusively, eaten by older, male consumers under the misapprehension of health benefits.</p>
          <p class="q-mt-md">In Ghana and China, most people don’t eat dogs, but there are hot spots and times of year when and where consumption increases</p>
          <p class="q-mt-md">In South Korea, more dog meat is consumed during Bok Nal (the hottest days in summer) than at other times of the year. In China, there is increased consumption in “hotspot” provinces such as Guangdong, Yunnan, Guangxi (where the infamous Yulin dog meat festival takes place), Jilin and Liaoning.The World Health Organization warns that the trade, slaughter and consumption of dogs poses human health risks from trichinellosis, cholera and rabies.</p>
        </div>
      </div>
    </div>
    <div class="bg-grey-2 row justify-center">
      <div class="widthScreen q-pa-md row">
        <span class="text-center col-12 text-h4 q-pb-md text-blue-grey-4">Messages From Our Community</span>
        <div class="col-12 col-sm-6 row q-pt-sm">
          <div class="col-2">
            <q-avatar>
              <q-img src="https://dogmeatsurvivor.org/images/1t.png" />
            </q-avatar>
          </div>
          <div class="col-10 q-pl-sm">
            <p class="text-h4">Sarah Kelly.</p>
            <p>Everyone deserves a second chance! <br /> Thank you for being the person who is strong enough; both mentally and physically to rescue and treat these loving dogs instead of ignoring the reality. You are going to inspire a great amount by helping others come to the awareness of what goes on in the world, as well as inspire others to take action by sharing, donating, and volunteering. Once again, thank you.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 row q-pt-sm">
          <div class="col-2">
            <q-avatar>
              <q-img src="https://dogmeatsurvivor.org/images/2t.png" />
            </q-avatar>
          </div>
          <div class="col-10 q-pl-sm">
            <p class="text-h4">Karen Marks.</p>
            <p>Thank you for doing what you do. <br />I donated because as an animal lover myself, watching videos brought me to tears. What these people do to these dogs is cruel and disgusting. I want to help out and team up to save these poor innocent animals and get them into loving homes in healthy conditions.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 row q-pt-sm">
          <div class="col-2">
            <q-avatar>
              <q-img src="https://dogmeatsurvivor.org/images/3t.png" />
            </q-avatar>
          </div>
          <div class="col-10 q-pl-sm">
            <p class="text-h4">Jilly Smith.</p>
            <p>Thank you. Don’t give up on them.<br />The impact on these poor pup’s lives is too clear. You’re stronger than most of us and I’m so thankful for the work you’re doing!</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 row q-pt-sm">
          <div class="col-2">
            <q-avatar>
              <q-img src="https://dogmeatsurvivor.org/images/4t.png" />
            </q-avatar>
          </div>
          <div class="col-10 q-pl-sm">
            <p class="text-h4">Aaron Hobit.</p>
            <p>Keep helping these dogs! I will keep donating<br />this organization and its partners are doing a wonderful job in saving these poor dogs from the dog meat industry and it makes me sad to see beautiful dogs being treated like nothing. this is the type of stuff that should not be allowed. animals are living beings too and should be treated equally, they are not meant to be eaten.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="widthScreen q-pa-md row">
        <div class="col-4 q-pa-xs">
          <div class="row items-center cursor">
            <q-img width="60px" src="~assets/logo.png" />
            <span class="q-ml-sm text-h6">Catmeatsurvivor</span>
          </div>
        </div>
        <div class="col-5 q-pa-xs">
          <p class="text-h6">Contact Us</p>
          <p class="text-h6">Hainan Yu Da Sheng Trading CO. Ltd</p>
          <div>
            <span><strong>Address:</strong> <span>Room 406, Welfare Building, No. 5 Qingnian Road, Meilan District, Haikou City, Hainan Province 178</span></span>
          </div>
          <div>
            <span><strong>Email:</strong> <span>support@dogmeatsurvivor.org</span></span>
          </div>
          <div>
            <span><strong>Phone:</strong> <span>+86 16 7765 44847</span></span>
          </div>
        </div>
        <div class="col-3 q-pa-xs">
          <p class="text-h6">Legal Info</p>
          <p class="cursor" @click="openWindow('terms.php')">TERMS</p>
          <p class="cursor" @click="openWindow('privacy.php')">PRIVACY POLICY</p>
          <p class="cursor" @click="openWindow('contact.php')">CONTACT US</p>
        </div>
      </div>
    </div>
    </q-page>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    openWindow (param) {
      let url = 'https://dogmeatsurvivor.org/' + param
      window.open(url)
    }
  }
}
</script>
