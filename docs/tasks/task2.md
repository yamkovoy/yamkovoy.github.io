# Task 2

::: details Text of the assignment

**Задача 2**

Перенести существующее описание REST API в формат OpenAPI и дополнить его, опираясь на вводные данные.

**Ожидаемый результат**: OpenAPI спецификация и дополнительными материалами по желанию.

**Язык**: английский.

**Вводные данные**:
Пользователь может приобретать один план обслуживания (или не приобретать ни одного). Набор планов можно изменять через API, и не все из них доступны каждому пользователю, т. к. привязаны к его провайдеру. Подписка на план меняет статус пользователя на “signing” до момента подтверждения. Кроме того, модель пользователя дополняется новым аттрибутом “sub_status” со значениями “signed”, “unsigned” и “absent” — эти статусы изменять запросами нельзя. В настоящий момент количество планов для каждого партнёра ограниченно mapping’ом из существующих типов (“type” пользователя, кроме “guest” и “admin”), которые можно задавать в запросе через запятую. Планы можно создавать, изменять и удалять. Запросы на предоставление информации поддерживают опциональный идентификатор и pagination. Для запросов изменения планов требуется Basic-авторизация.

**Имеющееся описание**:

See attached: <a href="../files/tech-writer-test-assignment.docx" download>tech-writer-test-assignment.docx</a>
:::

# API Specification

## Interactive API Specification

[API Specification on Readme.com](https://scalable-test-api-spec.readme.io/)

::: warning

This interactive API specification, generated in accordance with the OpenAPI specification, is for presentation purposes only and is not fully operational.

Since no existing server is referenced in the specification, an attempt to create a test request will return an error.

:::

## Downloadable files

<a href="../files/api-spec.yaml" download>API Specification (YAML)</a>

<a href="../files/api-spec.json" download>API Specification (JSON)</a>
