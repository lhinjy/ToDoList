import { FormItem } from "./FormItem";

// list is the content of Questions.js
// userInput = {1: {password: userValue, username: userValue}, 2:{postalcode: userValue, state: userValue, street: userValue}}
// step : 1, or 2, or 3
// onPageUpdate is a callback from App.jsx (called when there's changes in the form)
export const MultiStepForm = ({ list, userInput, onPageUpdate, step }) => {
  const updateAnswers = (value, category) => {
    // call prop passed from parent
    onPageUpdate(step, { [category]: value });
  };

  return (
    <div className="text-left">
      {list[step - 1].items?.map((item, index) => {
        return (
          <FormItem
            key={`${index}_${item.label}`}
            item={item}
            onChange={updateAnswers}
            answer={userInput[step] ? userInput[step][item.key] : null}
          />
        );
      })}
    </div>
  );
};
