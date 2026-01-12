import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, input, OnInit, output, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';

// Service.
import { MenuBarService } from './menu-bar.service';

@Component({
  selector: 'ax-menu-bar',
  standalone: true,
  imports: [
    // Angular Modules.
    CommonModule,

    // Angular Router.
    RouterLink,
    RouterLinkActive,

    // PrimeNG Modules.
    ButtonModule,
    MenubarModule,
    TooltipModule,
  ],
  templateUrl: './menu-bar.html',
  styleUrls: ['./menu-bar.scss'],
})
export class MenuBar implements AfterViewInit, OnInit {
  @ViewChild('menuBar', { static: true }) menuBar!: ElementRef;

  items = input<MenuItem[]>();

  isFixed = false;
  initialBottom = 0;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (this.menuBar) {
  //     const nativeElement = (this.menuBar as any).el.nativeElement;
  //     const rect = nativeElement.getBoundingClientRect();
  //     // Make absolute when scrolled past the menu's bottom
  //     // this.isFixed = window.scrollY >= (rect.top + rect.height);
  //     this.isFixed = window.scrollY >= this.initialBottom;

  //     if (this.isFixed) {
  //       nativeElement.classList.add('fixed', 'top-0', 'z-30', 'w-full', 'shadow-lg');

  //       document.body.style.paddingTop = nativeElement.offsetHeight + 'px';
  //     } else {
  //       nativeElement.classList.remove('fixed', 'top-0', 'z-30', 'w-full', 'shadow-lg');
  //       document.body.style.paddingTop = '0px';
  //     }
  //   }
  // }

  constructor(public menuBarService: MenuBarService) {}

  ngAfterViewInit() {
    // Calculate initial bottom position once
    const nativeElement = (this.menuBar as any).el.nativeElement;
    this.initialBottom = nativeElement.offsetTop + nativeElement.offsetHeight;
  }

  ngOnInit() {
    this.menuBarService.setItems(this.items()!);
    // this.initialTop = this.menuBar.nativeElement.offsetTop;
  }
}
