namespace Shared.Types

type Counter = int

type Model =
    {
      counter: Counter option
    }
    static member Empty =
        { counter = None }