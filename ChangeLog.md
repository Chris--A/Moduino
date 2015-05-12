
#### `V 0.1.6` May 05, 2015

- Bumped version to fix inconsistencies.

#### `V 0.1.4` Feb 22, 2015

- Improvements
  - Small skin update.
- Bug Fixes
  - Applied fix for sizing issues caused by images loading late. [`#21`](https://github.com/Chris--A/Moduino/issues/21)

#### `V 0.1.2` Feb 13, 2015

- Improvements
  - Started implementing themes. A basic theme has been created for initial testing.
  - Mods are now run on more pages giving a more consistent feel.
  - A menu system is incorporated on every page which allows instant access to all sections of the forum (non-admin)
- Bug Fixes
  - Removed dependencies for window.onLoad event. Fixes [`#14`](https://github.com/Chris--A/Moduino/issues/14)
- New Mods
  - [thread] Moved profile 'blurb' to avatar tool-tip.
  - [lastposts] Added basic theme.
  - [global,thread] Gravatar support for members with no avatar set. [`#19`](https://github.com/Chris--A/Moduino/issues/19)


#### `V 0.1.1` Jan 11, 2015

- Improvements
  - Moved to version 0.1.0 so composer installations do not need `"minimum-stability": "dev"`.
    This is required to use composer API as Symphony has deprecated some features found in the composer dev.
- Bug Fixes
  - Fixed syntax highlighting pre filter RegEx [`#17`](https://github.com/Chris--A/Moduino/issues/17)
  - Syntax Highlighter now removes span tabs (shows as plain text once formatted, forum added recently). [`#18`](https://github.com/Chris--A/Moduino/issues/18)
- New Mods
  - [thread] Hide second `[Add Karma]` label. [`#13`](https://github.com/Chris--A/Moduino/issues/13)
  - [index.forum] Enlarged last post info to maximum. Info now takes 1 line where possible (Reduced from 3, long user names may push to a second line) ([`#11`](https://github.com/Chris--A/Moduino/issues/11),[`#13`](https://github.com/Chris--A/Moduino/issues/13))
  - [thread] Moved post tools into post header. This includes the quote, edit, more, and report to moderator tools. [`#2`](https://github.com/Chris--A/Moduino/issues/2)

#### `V 0.0.43` Jan 01, 2015

- Improvements
  - Changed auto update time to 30mins from 10 mins
- Bug Fixes
  - Fixed syntax highlighter horizontal scroll issue [`#16`](https://github.com/Chris--A/Moduino/issues/16)
  - Prevent hiding of 'LOG IN'/'SIGN UP' options when not logged in. [`#15`](https://github.com/Chris--A/Moduino/issues/15)
  - Fixed SyntaxHighlighter for IE, it appears part of the same problem appeared in FireFox. [`#10`](https://github.com/Chris--A/Moduino/issues/10)

#### `V 0.0.40` Dec 27, 2014

- Bug fixes
  - Updated auto loader
  - Fixed page detection RegEx
- Improvements
  - Added Composer compatibility for Composer based update system on [arduino.land/Moduino/](http://arduino.land/Moduino/)
  
#### `V 0.0.39` Dec 8, 2014

- Improvements
  - Added auto update code.
  - Started implementing GUI for options.
- New Mods
  - [global] Added 'Last Posts' link to header.
  - [thread] Provided a toggle to allow quotes to go to the 'New Post' page rather than the 'Quick Reply' box.
	
#### `V 0.0.32` Nov 12, 2014

- New Mods
  - [global] Prevent navigation from sticking to page while scrolling down.
  - [index.root] Shrink index page.
  - [index.root] Hide forum description.
  - [index.forum] Shrink containers.
  - [index.forum] There is currently an empty menu bar above thread listing *(17px high)*. Removed.
  - [index.forum.sticky] Hide sticky threads.
  - [index.forum.sticky] Add a toggle to show/hide sticky threads.
  - [thread.quote] Remove excess `<br>` tags from end of quote.
  - [thread.quote] Removed the header if empty *(no author/link)*.
  - [thread.quote] Moved 'Select All' button to hover over.
  - [thread.quote] Added customisable colouring to quotes.
  - [thread.code] Moved 'Select All' button to hover over.  
  - [thread.code.highlighting] Added option for syntax highlighting.
  - [thread.code.highlighting] Added line numbers toggle.

#### `V 0.0.1` Nov 8, 2014
- Inital file set added (Moduino core and first mods)
- New Mods
  - [global] Remove shopping cart icon.
  - [global] Allow resizing the forum content to a specific width.
  - [global] Remove empty space from the page header. 
  - [global] Allow setting page header to custom content width.
  - [thread] Hide IP data (your IP, or the text saying 'logged').
  - [thread] Shrink posts.
  - [thread] Currently a users post profile can show two web links, hide the second.
  - [thread] Combine the '[Add Karma]' link with the karma count.  
  - [thread.code] Set maximum starting height for code boxes.
  - [thread.code] Allow code boxes to be sizeable.  