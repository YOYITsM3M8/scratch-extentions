const icon = "data:image/png;base64,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";

class Utilities {
  const formatMessage = require('format-message');
  constructor() {}

  getInfo() {
    return {
      id: 'utilities',
      name: 'Utlities',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [{
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [A] exactly [B]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [START] to [END] of [STRING]',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red apple'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[PATH] of [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'fruit/apples'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'bananas are awesome. i like bananas.'
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          // Required: the machine-readable name of this operation.
          // This will appear in project JSON.
          opcode: 'myReporter', // becomes 'someBlocks.myReporter'

          // Required: the kind of block we're defining, from a predefined list.
          // Fully supported block types:
          //   BlockType.BOOLEAN - same as REPORTER but returns a Boolean value
          //   BlockType.COMMAND - a normal command block, like "move {} steps"
          //   BlockType.HAT - starts a stack if its value changes from falsy to truthy ("edge triggered")
          //   BlockType.REPORTER - returns a value, like "direction"
          // Block types in development or for internal use only:
          //   BlockType.BUTTON - place a button in the block palette
          //   BlockType.CONDITIONAL - control flow, like "if {}" or "if {} else {}"
          //     A CONDITIONAL block may return the one-based index of a branch to
          //     run, or it may return zero/falsy to run no branch.
          //   BlockType.EVENT - starts a stack in response to an event (full spec TBD)
          //   BlockType.LOOP - control flow, like "repeat {} {}" or "forever {}"
          //     A LOOP block is like a CONDITIONAL block with two differences:
          //     - the block is assumed to have exactly one child branch, and
          //     - each time a child branch finishes, the loop block is called again.
          blockType: Scratch.BlockType.REPORTER,

          // Required for CONDITIONAL blocks, ignored for others: the number of
          // child branches this block controls. An "if" or "repeat" block would
          // specify a branch count of 1; an "if-else" block would specify a
          // branch count of 2.
          // TODO: should we support dynamic branch count for "switch"-likes?
          branchCount: 0,

          // Optional, default false: whether or not this block ends a stack.
          // The "forever" and "stop all" blocks would specify true here.
          terminal: true,

          // Optional, default false: whether or not to block all threads while
          // this block is busy. This is for things like the "touching color"
          // block in compatibility mode, and is only needed if the VM runs in a
          // worker. We might even consider omitting it from extension docs...
          blockAllThreads: false,

          // Required: the human-readable text on this block, including argument
          // placeholders. Argument placeholders should be in [MACRO_CASE] and
          // must be [ENCLOSED_WITHIN_SQUARE_BRACKETS].
          text: formatMessage({
            id: 'myReporter',
            defaultMessage: 'letter [LETTER_NUM] of [TEXT]',
            description: 'Label on the "myReporter" block'
          }),

          // Required: describe each argument.
          // Argument order may change during translation, so arguments are
          // identified by their placeholder name. In those situations where
          // arguments must be ordered or assigned an ordinal, such as interaction
          // with Scratch Blocks, arguments are ordered as they are in the default
          // translation (probably English).
          arguments: {
            // Required: the ID of the argument, which will be the name in the
            // args object passed to the implementation function.
            LETTER_NUM: {
              // Required: type of the argument / shape of the block input
              type: ArgumentType.NUMBER,

              // Optional: the default value of the argument
              default: 1
            },

            // Required: the ID of the argument, which will be the name in the
            // args object passed to the implementation function.
            TEXT: {
              // Required: type of the argument / shape of the block input
              type: ArgumentType.STRING,

              // Optional: the default value of the argument
              default: formatMessage({
                id: 'myReporter.TEXT_default',
                defaultMessage: 'text',
                description: 'Default for "TEXT" argument of "someBlocks.myReporter"'
              })
            }
          },

          // Optional: the function implementing this block.
          // If absent, assume `func` is the same as `opcode`.
          func: 'myReporter',

          // Optional: list of target types for which this block should appear.
          // If absent, assume it applies to all builtin targets -- that is:
          // [TargetType.SPRITE, TargetType.STAGE]
          filter: [TargetType.SPRITE]
        }
      ]
    }
  }

  isExactly({
    A,
    B
  }) {
    return A === B;
  }

  isLessOrEqual({
    A,
    B
  }) {
    return A <= B;
  }

  isMoreOrEqual({
    A,
    B
  }) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({
    A,
    B
  }) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({
    A,
    B,
    C
  }) {
    return A ? B : C;
  }

  letters({
    STRING,
    START,
    END
  }) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({
    URL
  }) {
    return fetch(URL).then(res => res.text())
      .catch(err => '');
  }

  parseJSON({
    PATH,
    JSON_STRING
  }) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({
    STRING
  }) {
    return STRING;
  }

  regexReplace({
    STRING,
    REGEX,
    NEWSTRING
  }) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

Scratch.extensions.register(new Utilities());
