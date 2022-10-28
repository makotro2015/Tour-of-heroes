import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './interfaces/hero';
import { User } from './interfaces/user';
import { Group } from './interfaces/group';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    const users : User[] =[{
      id: 1,
      firstName: 'Johannah',
      lastName: 'Kiffin',
      email: 'jkiffin0@google.pl',
      gender: 'F',
      jobTitle: 'Administrative Assistant I',
    }, {
      id: 2,
      firstName: 'Eldin',
      lastName: 'Astbery',
      email: 'eastbery1@geocities.jp',
      gender: 'M',
      jobTitle: 'Senior Editor',
    }, {
      id: 3,
      firstName: 'Nahum',
      lastName: 'Mounce',
      email: 'nmounce2@vk.com',
      gender: 'M',
      jobTitle: 'Programmer II',
    }, {
      id: 4,
      firstName: 'Gallard',
      lastName: 'Standell',
      email: 'gstandell3@europa.eu',
      gender: 'M',
      jobTitle: 'Account Representative II',
    }, {
      id: 5,
      firstName: 'Koenraad',
      lastName: 'Domleo',
      email: 'kdomleo4@cornell.edu',
      gender: 'M',
      jobTitle: 'Quality Control Specialist',
    }, {
      id: 6,
      firstName: 'Uriah',
      lastName: 'Turbat',
      email: 'uturbat5@aol.com',
      gender: 'M',
      jobTitle: 'Accounting Assistant II',
    }, {
      id: 7,
      firstName: 'Waldemar',
      lastName: 'Fowley',
      email: 'wfowley6@sun.com',
      gender: 'M',
      jobTitle: 'Account Coordinator',
    }, {
      id: 8,
      firstName: 'Rodolfo',
      lastName: 'Trenchard',
      email: 'rtrenchard7@yandex.ru',
      gender: 'M',
      jobTitle: 'Data Coordiator',
    }, {
      id: 9,
      firstName: 'Konstance',
      lastName: 'Dudek',
      email: 'kdudek8@techcrunch.com',
      gender: 'F',
      jobTitle: 'Administrative Assistant I',
    }, {
      id: 10,
      firstName: 'Monti',
      lastName: 'Perton',
      email: 'mperton9@youtube.com',
      gender: 'M',
      jobTitle: 'Operator',
    }];

    const groups : Group[] =[{
      id: 1,
      name: 'group1',
      countMembers: 21,
      countPosts: 21,
      countComments: 21,
    }, {
      id: 2,
      name: 'group2',
      countMembers: 22,
      countPosts: 22,
      countComments: 22,
    }, {
      id: 3,
      name: 'group3',
      countMembers: 23,
      countPosts: 23,
      countComments: 23,
    }, {
      id: 4,
      name: 'group4',
      countMembers: 24,
      countPosts: 24,
      countComments: 24,
    }, {
      id: 5,
      name: 'group5',
      countMembers: 25,
      countPosts: 25,
      countComments: 25,
    }, {
      id: 6,
      name: 'group6',
      countMembers: 26,
      countPosts: 26,
      countComments: 26,
    }, {
      id: 7,
      name: 'group7',
      countMembers: 27,
      countPosts: 27,
      countComments: 27,
    }, {
      id: 8,
      name: 'group8',
      countMembers: 28,
      countPosts: 28,
      countComments: 28,
    }, {
      id: 9,
      name: 'group9',
      countMembers: 29,
      countPosts: 29,
      countComments: 29,
    }, {
      id: 10,
      name: 'group10',
      countMembers: 30,
      countPosts: 30,
      countComments: 30,
    }, {
      id: 11,
      name: 'group11',
      countMembers: 11,
      countPosts: 11,
      countComments: 11,
    }, {
      id: 12,
      name: 'group12',
      countMembers: 12,
      countPosts: 12,
      countComments: 12,
    }, {
      id: 13,
      name: 'group13',
      countMembers: 13,
      countPosts: 13,
      countComments: 13,
    }, {
      id: 14,
      name: 'group14',
      countMembers: 14,
      countPosts: 14,
      countComments: 14,
    }, {
      id: 15,
      name: 'group15',
      countMembers: 15,
      countPosts: 15,
      countComments: 15,
    }];

    return {heroes, users, groups};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}