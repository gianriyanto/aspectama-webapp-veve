<template>
  <section id="Testimony">
    <div class="top-bar">
      <router-link to="/">
        <button class="back-button">
          <arrow-left-icon size="1.5x" class="button-icon"></arrow-left-icon>
          <span class="button-label"> Back </span>
        </button>
      </router-link>
    </div>
    <div class="content-wrapper">
      <div class="header">
        <span class="header-text">
          Client Stories
        </span>
        <span class="subheader-text">
          I value deep collaborative relationships with my clients. I've had the pleasure closely with clients discover their passion and education.
        </span>
      </div>
      <div class="testimony-container disable-scrollbars">
        <TestimonyCard v-for="testimony in testimonies"
                       :key="testimony.index"
                       :testimonyData="testimony"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons'
import TestimonyCard from "@/components/TestimonyCard";

export default {
  name: "Testimony",
  components: {
    TestimonyCard,
    ArrowLeftIcon
  },
  data() {
    return {
      testimonies: [
        {
          client: 'Joseline Luvena Tanujaya',
          university: 'MSC Business Analytic',
          header: "Valuable insights from their expertise and experience.",
          message: 'Aspectama played a critical role in my graduate admission journey. They provided valuable insights from their expertise and experience to advise the best program suitable for my needs. For a prospective student with a full-time job like me, masters and visa application can ba confusing hassle. However they have been very accommodating through the administration process. Aspectama has guided me through uncertainties amidst this pandemic, so that I managed to obtain my dream masters program in a safe way without compromising my desired learning experience.',
          imageURL: "Joseline.png"
        },
        {
          client: 'Ricky Saputra Tjioe',
          university: 'Glion Institue of Higher Education',
          header: "Provided personality test to make sure I have the right passion for my studies",
          message: "Aspectama really helped me a lot in finding my bachelor's degree process. They provided personality test to make sure I have the right passion for my studies. They also advise me the best campus options for Hospitality which is in Switzerland plus the scholarship offers! From the administration process until I have arrived in Clion, nothing was missed and they are very anticipated. Thanks to Aspectama;s help, I am able to start my Bachelor degree at Glion Institute of Higher Education smoothly.",
          imageURL: "Ricky.png"
        },
        {
          client: 'Devin Ryandi Setiawan',
          university: 'University of Kansas',
          header: "Truly focused on the individual",
          message: "Aspectama gives me the freedom and flexibility in choosing a good university abroad. Their service truly focused on the individual, allowing me to find the university that suits my needs. It introduced me to opportunities that would be oblivious to me otherwise - such as scholarships that was presented to me. Aspectama helped me tremendously through the entire process. They also provided so much administrative help, ensuring a smooth process all throughout. I'm glad Aspectama was there to guide me through this stressful process.",
          imageURL: "Devin.png"
        },
        {
          client: 'Jocelyn Betricia Fayola',
          university: 'Oregon State University',
          header: "Truly thank Aspectama for their patience and guidance.",
          message: 'Aspectama has helped me so much throughout my process of getting admitted to university,, Through the guidance that I received, I was able to acquire a scholarship worth $32,000 for 4 years. Aspectama has made everything so hassle free, I truly thank Aspectama for their patience and guidance.',
          imageURL: "Jocelyn.png"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #Testimony {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100vw;

    .top-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 50px;
      height: 100px;

      .back-button {
        display: flex;
        flex-direction: row;
        background-color: transparent;
        align-items: center;

        .button-icon {
          margin-right: 5px;
        }

        .button-label {
          font-family: "Bw Modelica Bold", serif;
          font-size: 20px;
          color: #292929;
        }
      }

    }

    .content-wrapper {
      display: flex;
      flex-direction: column;

      .header {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 40vw;
        margin: 0 auto 20px auto;

        .header-text {
          font-family: 'Bw Modelica Bold', serif;
          font-size: 50px;
          letter-spacing: -1px;
          margin-bottom: 10px;
          color: #1a1a1a;
        }

        .subheader-text {
          font-family: 'Bw Modelica Regular', serif;
          font-size: 16px;
          line-height: 1.5;
          color: #1a1a1a;
        }
      }

      .testimony-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        margin-top: 30px;
        height: fit-content;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  display: none;
}

</style>