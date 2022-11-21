# Angular ViewEncapsulation.None Demo

When using `ViewEncapsulation.None`, developers need to be very careful. Using it may produce unwanted behavior.

This small project reproduces a common issue that occurs when using it: As soon as the non-encapsulated component is displayed, its style is applied to the whole DOM. And this, even after destroying the component. The style remains.

[Play me on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-tanz3s)
