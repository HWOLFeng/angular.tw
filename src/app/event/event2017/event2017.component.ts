import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'augt-event-2017',
  templateUrl: './event2017.component.html',
  styleUrls: ['./event2017.component.scss']
})
export class Event2017Component implements OnInit {
  title: string = 'Angular Taiwan 2017';
  description: string =
      `Angular從Beta到正式，一直到現在的四版，也差不多有一年多的時間。這一年來，每個人在學習Angular的旅程上，不論是自己的小專案，或是公司的案子上，多少會遇到一些讓人無法忘記的痛苦經驗，或是解開成就的喜悅感。這次的活動，我們邀請大家來分享這一年來學習Angular的心得，內容也會很精彩，不能錯過!`;

  speakers: ISpeaker[] = [
    {
      name: '洪名辰',
      description:
          `第 8 屆 iT 邦幫忙鐵人賽 Modern Web 組冠軍 - 30 天精通 RxJS，默默無名的少年魔法師，常出現在魔法師大會中，專注於前端的相關法術。`,
      photo: 'assets/img/events/2017/jerryHong.jpg'
    },
    {
      name: 'Sam',
      description:
          `Lorem ipsum dolor sit amet, mutat graeco volumus ad eam, singulis patrioque comprehensam nam no. Mei cu dicat voluptaria
        volumus.`,
      photo: 'assets/img/img1.jpg'
    },
    {
      name: 'Haru',
      description:
          `Lorem ipsum dolor sit amet, mutat graeco volumus ad eam, singulis patrioque comprehensam nam no. Mei cu dicat voluptaria
        volumus.`,
      photo: 'assets/img/img1.jpg'
    },
    {
      name: 'Jimmy ho',
      description:
          `Lorem ipsum dolor sit amet, mutat graeco volumus ad eam, singulis patrioque comprehensam nam no. Mei cu dicat voluptaria
        volumus.`,
      photo: 'assets/img/img1.jpg'
    },
    {
      name: 'Jeff',
      description:
          `Lorem ipsum dolor sit amet, mutat graeco volumus ad eam, singulis patrioque comprehensam nam no. Mei cu dicat voluptaria
        volumus.`,
      photo: 'assets/img/events/2017/jeff.jpg'
    },
    {
      name: '潘拉拉',
      description:
          `Lorem ipsum dolor sit amet, mutat graeco volumus ad eam, singulis patrioque comprehensam nam no. Mei cu dicat voluptaria
        volumus.`,
      photo: 'assets/img/img1.jpg'
    },
    {
      name: 'Will 保哥',
      description:
          `Lorem ipsum dolor sit amet, mutat graeco volumus ad eam, singulis patrioque comprehensam nam no. Mei cu dicat voluptaria
        volumus.`,
      photo: 'assets/img/events/2017/will.jpg'
    }
  ];
  constructor(private Title: Title, private meta: Meta) {
    this.Title.setTitle(`${this.title} | Angular User Group Taiwan`);
    this.meta.addTags([
      {property: 'og:url', content: 'https://angular.tw'}, {property: 'og:type', content: 'event'},
      {property: 'og:title', content: this.title},
      {property: 'og:description', content: this.description},
      {property: 'og:image', content: 'Good Morning Harwood'}
    ]);
  }

  ngOnInit() {}
}

interface ISpeaker {
  name: string;
  description: string;
  photo: string
}
