import { TestimonialSectionProps } from '@/src/sections/testimonial/v2';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    title: 'What Our "Pilots <br />Are Saying ',
    subtitle: '',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person1.png',
          alt: 'Esther Howard',
        },
        name: 'Hugo Adams',
        about: 'Content Creator',
      },
      speech:
        ' With high resolution camera, picture become clear and beautiful. Its so easy to operate drone.',
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person2.png',
          alt: 'Jennie Obrien',
        },
        name: 'Jennie Obrien',
        about: 'Diretor Film',
      },
      speech:
        'Taking high view video become easy and faster. Battery performance really helping for making film.',
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person3.png',
          alt: 'Lisa Millz',
        },
        name: 'Lisa Millz',
        about: 'Content WQCreator',
      },
      speech:
        'Making video content for my trip vlog so powerful and wonderful. Love the video quality.',
    },
  ],
};
