import { CrudFilter } from "@refinedev/core";
import { mapOperator } from "./mapOperator";

export const generateFilter = (filter: CrudFilter, query: any) => {
  switch (filter.operator) {
    case "eq":
      return query.eq(filter.field, filter.value);
    case "ne":
      return query.neq(filter.field, filter.value);
    case "in":
      return query.in(filter.field, filter.value);
    case "ina":
      return query.contains(filter.field, filter.value);
    case "nina":
      return query.not(
        filter.field,
        "cs",
        `{${filter.value.map((val: any) => `"${val}"`).join(",")}}`,
      );

    case "gt":
      return query.gt(filter.field, filter.value);
    case "gte":
      return query.gte(filter.field, filter.value);
    case "lt":
      return query.lt(filter.field, filter.value);
    case "lte":
      return query.lte(filter.field, filter.value);
    case "contains":
      return query.ilike(filter.field, `%${filter.value}%`);
    case "containss":
      return query.like(filter.field, `%${filter.value}%`);
    case "null":
      return query.is(filter.field, null);
    case "startswith":
      return query.ilike(filter.field, `${filter.value}%`);
    case "endswith":
      return query.ilike(filter.field, `%${filter.value}`);
    case "or": {
      const orSyntax = filter.value
        .map((item) => {
          if (
            item.operator !== "or" &&
            item.operator !== "and" &&
            "field" in item
          ) {
            if (item.operator === "ina" || item.operator === "nina")
              return `${item.field}.${mapOperator(
                item.operator,
              )}.${`{${item.value.map((val: any) => `"${val}"`).join(",")}}`}`;

            return `${item.field}.${mapOperator(item.operator)}.${item.value}`;
          }
          return;
        })
        .join(",");
      return query.or(orSyntax);
    }

    case "and":
      throw Error("Operator 'and' is not supported");
    default:
      return query.filter(
        filter.field,
        mapOperator(filter.operator),
        filter.value,
      );
  }
};
