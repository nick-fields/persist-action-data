# Persist Data Between Jobs

[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

Allows data to be shared between jobs and accessed via env variables and step output

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
- uses: nick-invision/persist-action-data@v1
  with:
    data: ${{ steps.some-step.output.some-output }}
    variable: SOME_STEP_OUTPUT
```

### Example using data from another job via env variable

```yaml
- uses: nick-invision/persist-action-data@v1
  with:
    data: ${{ steps.some-step.output.some-output }}
    retrieve_variables: SOME_STEP_OUTPUT, SOME_OTHER_STEP_OUTPUT
- run: echo $SOME_STEP_OUTPUT
```

### Example using data from another job via output

```yaml
- uses: nick-invision/persist-action-data@v1
  id: global-data
  with:
    data: ${{ steps.some-step.output.some-output }}
    retrieve_variables: SOME_STEP_OUTPUT, SOME_OTHER_STEP_OUTPUT
- run: echo ${{ steps.global-data.outputs.SOME_STEP_OUTPUT }}
```
