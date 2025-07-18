import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counters = [
    { label: 'Enrolled Students', value: 1200, current: 0 },
    { label: 'Faculty Members', value: 85, current: 0 },
    { label: 'Courses Offered', value: 25, current: 0 },
    { label: 'Years of Excellence', value: 50, current: 0 }
  ];

  testimonials = [
    {
      name: 'Anjali Verma',
      course: 'B.Tech CSE',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      feedback: 'This college helped me unlock my potential. Excellent faculty and labs!'
    },
    {
      name: 'Rohan Mehta',
      course: 'B.Sc. Physics',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      feedback: 'Loved the campus life and research opportunities. Highly recommended!'
    },
    {
      name: 'Priya Singh',
      course: 'MBA',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      feedback: 'Great placement support and real-world exposure through internships.'
    },
    {
      name: 'Vikram Joshi',
      course: 'MCA',
      photo: 'https://randomuser.me/api/portraits/men/81.jpg',
      feedback: 'Supportive faculty and modern classrooms. I felt ready for the tech world.'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.animateCounters();
  }

  animateCounters(): void {
    this.counters.forEach(counter => {
      const increment = Math.ceil(counter.value / 100);
      const interval = setInterval(() => {
        if (counter.current < counter.value) {
          counter.current += increment;
        } else {
          counter.current = counter.value;
          clearInterval(interval);
        }
      }, 20);
    });
  }
}
