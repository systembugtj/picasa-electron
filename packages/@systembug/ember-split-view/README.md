
Forked Repo to support ember 3.20

There is a demo app in [tests/dummy](https://github.com/systembugtj/ember-split-view/tree/master/tests/dummy).

## Installation

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

## Configuration

You need to add the following to your `config/environment.js`:
```javascript
resizeServiceDefaults: {
  debounceTimeout    : 200,
  heightSensitive    : true,
  widthSensitive     : true,
  injectionFactories : [ 'view', 'component']
},
```

### Examples
Vertical SplitView example:

```html
<SplitView @isVertical={{true}} @class="splitViewVertical" as |split|>
  <split.child @class="border">
    Content of the left view here.
  </split.child>
  {{split.sash}}
  <split.child @class="border">
    Content of the right view here.
  </split.child>
</SplitView>
```

Horizontal SplitView example:

```
<SplitView @isVertical={{false}} @class="splitViewHorizontal" as |split|>
  <split.child @class="border" >
    Content of the top view here.
  </split.child>
  {{split.sash}}
  <split.child @class="border" >
    Content of the bottom view here.
  </split.child>
</SplitView>
```

### Donating

All donations will support this project and keep the developer supplied with Reese's Minis.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

