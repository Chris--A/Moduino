
#### Jan 11, 2015 `V 0.1.0`

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

#### Jan 01, 2015 `V 0.0.43`

- Improvements
  - Changed auto update time to 30mins from 10 mins
- Bug Fixes
  - Fixed syntax highlighter horizontal scroll issue [`#16`](https://github.com/Chris--A/Moduino/issues/16)
  - Prevent hiding of 'LOG IN'/'SIGN UP' options when not logged in. [`#15`](https://github.com/Chris--A/Moduino/issues/15)
  - Fixed SyntaxHighlighter for IE, it appears part of the same problem appeared in FireFox. [`#10`](https://github.com/Chris--A/Moduino/issues/10)

#### Dec 27, 2014 `V 0.0.40`

- Bug fixes
  - Updated auto loader
  - Fixed page detection RegEx
- Improvements
  - Added Composer compatibility for Composer based update system on [arduino.land/Moduino/](http://arduino.land/Moduino/)
  
#### Dec 8, 2014 `V 0.0.39`

- Improvements
  - Added auto update code.
  - Started implementing GUI for options.
- New Mods
  - [global] Added 'Last Posts' link to header.
  - [thread] Provided a toggle to allow quotes to go to the 'New Post' page rather than the 'Quick Reply' box.
	
#### Nov 12, 2014 `V 0.0.32`

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

### `Nov 8, 2014` `V 0.0.1`
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