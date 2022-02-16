# Persist Data Between Jobs

[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

Allows data to be shared between jobs and accessed via env variables and step output

**NOTE:** Ownership of this project was transferred to my personal account `nick-fields` from my work account `nick-invision`.  Details [here](#Ownership)

---

## **Inputs**

### **`data`**

**Optional** The data to persist from job

### **`variable`**

**Optional** The variable to be used to access data in other jobs

### **`retrieve_variables`**

**Optional** Comma delimited list of variables to load into job

---

## **Examples**

### Example storing data

```yaml
- uses: nick-fields/persist-action-data@v1
  with:
    data: ${{ steps.some-step.output.some-output }}
    variable: SOME_STEP_OUTPUT
```

### Example using data from another job via env variable

```yaml
- uses: nick-fields/persist-action-data@v1
  with:
    data: ${{ steps.some-step.output.some-output }}
    retrieve_variables: SOME_STEP_OUTPUT, SOME_OTHER_STEP_OUTPUT
- run: echo $SOME_STEP_OUTPUT
```

### Example using data from another job via output

```yaml
- uses: nick-fields/persist-action-data@v1
  id: global-data
  with:
    data: ${{ steps.some-step.output.some-output }}
    retrieve_variables: SOME_STEP_OUTPUT, SOME_OTHER_STEP_OUTPUT
- run: echo ${{ steps.global-data.outputs.SOME_STEP_OUTPUT }}
```


---

## **Ownership**

As of 2022/02/15 ownership of this project has been transferred to my personal account `nick-fields` from my work account `nick-invision` due to me leaving InVision.  I am the author and have been the primary maintainer since day one and will continue to maintain this as needed.

No immediate action is required if you rely on this as GitHub handles ownership transfers pretty well. Any current workflow reference to `nick-invision/persist-action-data@<whatever>` will still work, but will just pull from `nick-fields/persist-action-data@<whatever>` instead.  Who knows how long that will work, so at some point it would be beneficial to update your workflows to reflect the new owner accordingly.
