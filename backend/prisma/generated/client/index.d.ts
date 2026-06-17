
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FornecedorProfile
 * 
 */
export type FornecedorProfile = $Result.DefaultSelection<Prisma.$FornecedorProfilePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductPhoto
 * 
 */
export type ProductPhoto = $Result.DefaultSelection<Prisma.$ProductPhotoPayload>
/**
 * Model MeliIntegration
 * 
 */
export type MeliIntegration = $Result.DefaultSelection<Prisma.$MeliIntegrationPayload>
/**
 * Model ProductMapping
 * 
 */
export type ProductMapping = $Result.DefaultSelection<Prisma.$ProductMappingPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  FORNECEDOR: 'FORNECEDOR',
  VENDEDOR: 'VENDEDOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ProductStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DRAFT: 'DRAFT'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const MappingStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  PAUSED: 'PAUSED',
  ERROR: 'ERROR'
};

export type MappingStatus = (typeof MappingStatus)[keyof typeof MappingStatus]


export const OrderStatus: {
  CONFIRMED: 'CONFIRMED',
  PAYMENT_APPROVED: 'PAYMENT_APPROVED',
  READY_TO_SHIP: 'READY_TO_SHIP',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  RETURNED: 'RETURNED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type MappingStatus = $Enums.MappingStatus

export const MappingStatus: typeof $Enums.MappingStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.fornecedorProfile`: Exposes CRUD operations for the **FornecedorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FornecedorProfiles
    * const fornecedorProfiles = await prisma.fornecedorProfile.findMany()
    * ```
    */
  get fornecedorProfile(): Prisma.FornecedorProfileDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productPhoto`: Exposes CRUD operations for the **ProductPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPhotos
    * const productPhotos = await prisma.productPhoto.findMany()
    * ```
    */
  get productPhoto(): Prisma.ProductPhotoDelegate<ExtArgs>;

  /**
   * `prisma.meliIntegration`: Exposes CRUD operations for the **MeliIntegration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeliIntegrations
    * const meliIntegrations = await prisma.meliIntegration.findMany()
    * ```
    */
  get meliIntegration(): Prisma.MeliIntegrationDelegate<ExtArgs>;

  /**
   * `prisma.productMapping`: Exposes CRUD operations for the **ProductMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMappings
    * const productMappings = await prisma.productMapping.findMany()
    * ```
    */
  get productMapping(): Prisma.ProductMappingDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    FornecedorProfile: 'FornecedorProfile',
    Product: 'Product',
    ProductPhoto: 'ProductPhoto',
    MeliIntegration: 'MeliIntegration',
    ProductMapping: 'ProductMapping',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "fornecedorProfile" | "product" | "productPhoto" | "meliIntegration" | "productMapping" | "order"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FornecedorProfile: {
        payload: Prisma.$FornecedorProfilePayload<ExtArgs>
        fields: Prisma.FornecedorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FornecedorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FornecedorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload>
          }
          findFirst: {
            args: Prisma.FornecedorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FornecedorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload>
          }
          findMany: {
            args: Prisma.FornecedorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload>[]
          }
          create: {
            args: Prisma.FornecedorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload>
          }
          createMany: {
            args: Prisma.FornecedorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FornecedorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload>[]
          }
          delete: {
            args: Prisma.FornecedorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload>
          }
          update: {
            args: Prisma.FornecedorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload>
          }
          deleteMany: {
            args: Prisma.FornecedorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FornecedorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FornecedorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorProfilePayload>
          }
          aggregate: {
            args: Prisma.FornecedorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedorProfile>
          }
          groupBy: {
            args: Prisma.FornecedorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FornecedorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorProfileCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductPhoto: {
        payload: Prisma.$ProductPhotoPayload<ExtArgs>
        fields: Prisma.ProductPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload>
          }
          findFirst: {
            args: Prisma.ProductPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload>
          }
          findMany: {
            args: Prisma.ProductPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload>[]
          }
          create: {
            args: Prisma.ProductPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload>
          }
          createMany: {
            args: Prisma.ProductPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload>[]
          }
          delete: {
            args: Prisma.ProductPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload>
          }
          update: {
            args: Prisma.ProductPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload>
          }
          deleteMany: {
            args: Prisma.ProductPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPhotoPayload>
          }
          aggregate: {
            args: Prisma.ProductPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPhoto>
          }
          groupBy: {
            args: Prisma.ProductPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPhotoCountAggregateOutputType> | number
          }
        }
      }
      MeliIntegration: {
        payload: Prisma.$MeliIntegrationPayload<ExtArgs>
        fields: Prisma.MeliIntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeliIntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeliIntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload>
          }
          findFirst: {
            args: Prisma.MeliIntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeliIntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload>
          }
          findMany: {
            args: Prisma.MeliIntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload>[]
          }
          create: {
            args: Prisma.MeliIntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload>
          }
          createMany: {
            args: Prisma.MeliIntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeliIntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload>[]
          }
          delete: {
            args: Prisma.MeliIntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload>
          }
          update: {
            args: Prisma.MeliIntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload>
          }
          deleteMany: {
            args: Prisma.MeliIntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeliIntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeliIntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeliIntegrationPayload>
          }
          aggregate: {
            args: Prisma.MeliIntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeliIntegration>
          }
          groupBy: {
            args: Prisma.MeliIntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeliIntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeliIntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<MeliIntegrationCountAggregateOutputType> | number
          }
        }
      }
      ProductMapping: {
        payload: Prisma.$ProductMappingPayload<ExtArgs>
        fields: Prisma.ProductMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload>
          }
          findFirst: {
            args: Prisma.ProductMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload>
          }
          findMany: {
            args: Prisma.ProductMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload>[]
          }
          create: {
            args: Prisma.ProductMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload>
          }
          createMany: {
            args: Prisma.ProductMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload>[]
          }
          delete: {
            args: Prisma.ProductMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload>
          }
          update: {
            args: Prisma.ProductMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload>
          }
          deleteMany: {
            args: Prisma.ProductMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMappingPayload>
          }
          aggregate: {
            args: Prisma.ProductMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductMapping>
          }
          groupBy: {
            args: Prisma.ProductMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductMappingCountArgs<ExtArgs>
            result: $Utils.Optional<ProductMappingCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    meliIntegrations: number
    ordersAsSeller: number
    ordersAsSupplier: number
    productMappings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meliIntegrations?: boolean | UserCountOutputTypeCountMeliIntegrationsArgs
    ordersAsSeller?: boolean | UserCountOutputTypeCountOrdersAsSellerArgs
    ordersAsSupplier?: boolean | UserCountOutputTypeCountOrdersAsSupplierArgs
    productMappings?: boolean | UserCountOutputTypeCountProductMappingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeliIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeliIntegrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersAsSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersAsSupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMappingWhereInput
  }


  /**
   * Count Type FornecedorProfileCountOutputType
   */

  export type FornecedorProfileCountOutputType = {
    products: number
  }

  export type FornecedorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | FornecedorProfileCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * FornecedorProfileCountOutputType without action
   */
  export type FornecedorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfileCountOutputType
     */
    select?: FornecedorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FornecedorProfileCountOutputType without action
   */
  export type FornecedorProfileCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    photos: number
    productMappings: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | ProductCountOutputTypeCountPhotosArgs
    productMappings?: boolean | ProductCountOutputTypeCountProductMappingsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPhotoWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMappingWhereInput
  }


  /**
   * Count Type MeliIntegrationCountOutputType
   */

  export type MeliIntegrationCountOutputType = {
    productMappings: number
    orders: number
  }

  export type MeliIntegrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productMappings?: boolean | MeliIntegrationCountOutputTypeCountProductMappingsArgs
    orders?: boolean | MeliIntegrationCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * MeliIntegrationCountOutputType without action
   */
  export type MeliIntegrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegrationCountOutputType
     */
    select?: MeliIntegrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeliIntegrationCountOutputType without action
   */
  export type MeliIntegrationCountOutputTypeCountProductMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMappingWhereInput
  }

  /**
   * MeliIntegrationCountOutputType without action
   */
  export type MeliIntegrationCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ProductMappingCountOutputType
   */

  export type ProductMappingCountOutputType = {
    orders: number
  }

  export type ProductMappingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProductMappingCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductMappingCountOutputType without action
   */
  export type ProductMappingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMappingCountOutputType
     */
    select?: ProductMappingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductMappingCountOutputType without action
   */
  export type ProductMappingCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.UserRole | null
    phone: string | null
    document: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.UserRole | null
    phone: string | null
    document: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    phone: number
    document: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    phone?: true
    document?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    phone?: true
    document?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    phone?: true
    document?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone: string | null
    document: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    document?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedorProfile?: boolean | User$fornecedorProfileArgs<ExtArgs>
    meliIntegrations?: boolean | User$meliIntegrationsArgs<ExtArgs>
    ordersAsSeller?: boolean | User$ordersAsSellerArgs<ExtArgs>
    ordersAsSupplier?: boolean | User$ordersAsSupplierArgs<ExtArgs>
    productMappings?: boolean | User$productMappingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    document?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    document?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedorProfile?: boolean | User$fornecedorProfileArgs<ExtArgs>
    meliIntegrations?: boolean | User$meliIntegrationsArgs<ExtArgs>
    ordersAsSeller?: boolean | User$ordersAsSellerArgs<ExtArgs>
    ordersAsSupplier?: boolean | User$ordersAsSupplierArgs<ExtArgs>
    productMappings?: boolean | User$productMappingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      fornecedorProfile: Prisma.$FornecedorProfilePayload<ExtArgs> | null
      meliIntegrations: Prisma.$MeliIntegrationPayload<ExtArgs>[]
      ordersAsSeller: Prisma.$OrderPayload<ExtArgs>[]
      ordersAsSupplier: Prisma.$OrderPayload<ExtArgs>[]
      productMappings: Prisma.$ProductMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.UserRole
      phone: string | null
      document: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedorProfile<T extends User$fornecedorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$fornecedorProfileArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    meliIntegrations<T extends User$meliIntegrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$meliIntegrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "findMany"> | Null>
    ordersAsSeller<T extends User$ordersAsSellerArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersAsSellerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    ordersAsSupplier<T extends User$ordersAsSupplierArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersAsSupplierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    productMappings<T extends User$productMappingsArgs<ExtArgs> = {}>(args?: Subset<T, User$productMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly phone: FieldRef<"User", 'String'>
    readonly document: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.fornecedorProfile
   */
  export type User$fornecedorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    where?: FornecedorProfileWhereInput
  }

  /**
   * User.meliIntegrations
   */
  export type User$meliIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    where?: MeliIntegrationWhereInput
    orderBy?: MeliIntegrationOrderByWithRelationInput | MeliIntegrationOrderByWithRelationInput[]
    cursor?: MeliIntegrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeliIntegrationScalarFieldEnum | MeliIntegrationScalarFieldEnum[]
  }

  /**
   * User.ordersAsSeller
   */
  export type User$ordersAsSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.ordersAsSupplier
   */
  export type User$ordersAsSupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.productMappings
   */
  export type User$productMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    where?: ProductMappingWhereInput
    orderBy?: ProductMappingOrderByWithRelationInput | ProductMappingOrderByWithRelationInput[]
    cursor?: ProductMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMappingScalarFieldEnum | ProductMappingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FornecedorProfile
   */

  export type AggregateFornecedorProfile = {
    _count: FornecedorProfileCountAggregateOutputType | null
    _avg: FornecedorProfileAvgAggregateOutputType | null
    _sum: FornecedorProfileSumAggregateOutputType | null
    _min: FornecedorProfileMinAggregateOutputType | null
    _max: FornecedorProfileMaxAggregateOutputType | null
  }

  export type FornecedorProfileAvgAggregateOutputType = {
    shippingDays: number | null
  }

  export type FornecedorProfileSumAggregateOutputType = {
    shippingDays: number | null
  }

  export type FornecedorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    shippingType: string | null
    shippingDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    shippingType: string | null
    shippingDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    address: number
    city: number
    state: number
    zipCode: number
    shippingType: number
    shippingDays: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FornecedorProfileAvgAggregateInputType = {
    shippingDays?: true
  }

  export type FornecedorProfileSumAggregateInputType = {
    shippingDays?: true
  }

  export type FornecedorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    shippingType?: true
    shippingDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    shippingType?: true
    shippingDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    shippingType?: true
    shippingDays?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FornecedorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FornecedorProfile to aggregate.
     */
    where?: FornecedorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FornecedorProfiles to fetch.
     */
    orderBy?: FornecedorProfileOrderByWithRelationInput | FornecedorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FornecedorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FornecedorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FornecedorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FornecedorProfiles
    **/
    _count?: true | FornecedorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FornecedorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FornecedorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorProfileMaxAggregateInputType
  }

  export type GetFornecedorProfileAggregateType<T extends FornecedorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedorProfile[P]>
      : GetScalarType<T[P], AggregateFornecedorProfile[P]>
  }




  export type FornecedorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorProfileWhereInput
    orderBy?: FornecedorProfileOrderByWithAggregationInput | FornecedorProfileOrderByWithAggregationInput[]
    by: FornecedorProfileScalarFieldEnum[] | FornecedorProfileScalarFieldEnum
    having?: FornecedorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorProfileCountAggregateInputType | true
    _avg?: FornecedorProfileAvgAggregateInputType
    _sum?: FornecedorProfileSumAggregateInputType
    _min?: FornecedorProfileMinAggregateInputType
    _max?: FornecedorProfileMaxAggregateInputType
  }

  export type FornecedorProfileGroupByOutputType = {
    id: string
    userId: string
    companyName: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    shippingType: string | null
    shippingDays: number | null
    createdAt: Date
    updatedAt: Date
    _count: FornecedorProfileCountAggregateOutputType | null
    _avg: FornecedorProfileAvgAggregateOutputType | null
    _sum: FornecedorProfileSumAggregateOutputType | null
    _min: FornecedorProfileMinAggregateOutputType | null
    _max: FornecedorProfileMaxAggregateOutputType | null
  }

  type GetFornecedorProfileGroupByPayload<T extends FornecedorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorProfileGroupByOutputType[P]>
        }
      >
    >


  export type FornecedorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    shippingType?: boolean
    shippingDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | FornecedorProfile$productsArgs<ExtArgs>
    _count?: boolean | FornecedorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedorProfile"]>

  export type FornecedorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    shippingType?: boolean
    shippingDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedorProfile"]>

  export type FornecedorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    shippingType?: boolean
    shippingDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FornecedorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | FornecedorProfile$productsArgs<ExtArgs>
    _count?: boolean | FornecedorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FornecedorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FornecedorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FornecedorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string | null
      address: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      shippingType: string | null
      shippingDays: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fornecedorProfile"]>
    composites: {}
  }

  type FornecedorProfileGetPayload<S extends boolean | null | undefined | FornecedorProfileDefaultArgs> = $Result.GetResult<Prisma.$FornecedorProfilePayload, S>

  type FornecedorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FornecedorProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FornecedorProfileCountAggregateInputType | true
    }

  export interface FornecedorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FornecedorProfile'], meta: { name: 'FornecedorProfile' } }
    /**
     * Find zero or one FornecedorProfile that matches the filter.
     * @param {FornecedorProfileFindUniqueArgs} args - Arguments to find a FornecedorProfile
     * @example
     * // Get one FornecedorProfile
     * const fornecedorProfile = await prisma.fornecedorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FornecedorProfileFindUniqueArgs>(args: SelectSubset<T, FornecedorProfileFindUniqueArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FornecedorProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FornecedorProfileFindUniqueOrThrowArgs} args - Arguments to find a FornecedorProfile
     * @example
     * // Get one FornecedorProfile
     * const fornecedorProfile = await prisma.fornecedorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FornecedorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, FornecedorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FornecedorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorProfileFindFirstArgs} args - Arguments to find a FornecedorProfile
     * @example
     * // Get one FornecedorProfile
     * const fornecedorProfile = await prisma.fornecedorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FornecedorProfileFindFirstArgs>(args?: SelectSubset<T, FornecedorProfileFindFirstArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FornecedorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorProfileFindFirstOrThrowArgs} args - Arguments to find a FornecedorProfile
     * @example
     * // Get one FornecedorProfile
     * const fornecedorProfile = await prisma.fornecedorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FornecedorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, FornecedorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FornecedorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FornecedorProfiles
     * const fornecedorProfiles = await prisma.fornecedorProfile.findMany()
     * 
     * // Get first 10 FornecedorProfiles
     * const fornecedorProfiles = await prisma.fornecedorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fornecedorProfileWithIdOnly = await prisma.fornecedorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FornecedorProfileFindManyArgs>(args?: SelectSubset<T, FornecedorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FornecedorProfile.
     * @param {FornecedorProfileCreateArgs} args - Arguments to create a FornecedorProfile.
     * @example
     * // Create one FornecedorProfile
     * const FornecedorProfile = await prisma.fornecedorProfile.create({
     *   data: {
     *     // ... data to create a FornecedorProfile
     *   }
     * })
     * 
     */
    create<T extends FornecedorProfileCreateArgs>(args: SelectSubset<T, FornecedorProfileCreateArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FornecedorProfiles.
     * @param {FornecedorProfileCreateManyArgs} args - Arguments to create many FornecedorProfiles.
     * @example
     * // Create many FornecedorProfiles
     * const fornecedorProfile = await prisma.fornecedorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FornecedorProfileCreateManyArgs>(args?: SelectSubset<T, FornecedorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FornecedorProfiles and returns the data saved in the database.
     * @param {FornecedorProfileCreateManyAndReturnArgs} args - Arguments to create many FornecedorProfiles.
     * @example
     * // Create many FornecedorProfiles
     * const fornecedorProfile = await prisma.fornecedorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FornecedorProfiles and only return the `id`
     * const fornecedorProfileWithIdOnly = await prisma.fornecedorProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FornecedorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, FornecedorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FornecedorProfile.
     * @param {FornecedorProfileDeleteArgs} args - Arguments to delete one FornecedorProfile.
     * @example
     * // Delete one FornecedorProfile
     * const FornecedorProfile = await prisma.fornecedorProfile.delete({
     *   where: {
     *     // ... filter to delete one FornecedorProfile
     *   }
     * })
     * 
     */
    delete<T extends FornecedorProfileDeleteArgs>(args: SelectSubset<T, FornecedorProfileDeleteArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FornecedorProfile.
     * @param {FornecedorProfileUpdateArgs} args - Arguments to update one FornecedorProfile.
     * @example
     * // Update one FornecedorProfile
     * const fornecedorProfile = await prisma.fornecedorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FornecedorProfileUpdateArgs>(args: SelectSubset<T, FornecedorProfileUpdateArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FornecedorProfiles.
     * @param {FornecedorProfileDeleteManyArgs} args - Arguments to filter FornecedorProfiles to delete.
     * @example
     * // Delete a few FornecedorProfiles
     * const { count } = await prisma.fornecedorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FornecedorProfileDeleteManyArgs>(args?: SelectSubset<T, FornecedorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FornecedorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FornecedorProfiles
     * const fornecedorProfile = await prisma.fornecedorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FornecedorProfileUpdateManyArgs>(args: SelectSubset<T, FornecedorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FornecedorProfile.
     * @param {FornecedorProfileUpsertArgs} args - Arguments to update or create a FornecedorProfile.
     * @example
     * // Update or create a FornecedorProfile
     * const fornecedorProfile = await prisma.fornecedorProfile.upsert({
     *   create: {
     *     // ... data to create a FornecedorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FornecedorProfile we want to update
     *   }
     * })
     */
    upsert<T extends FornecedorProfileUpsertArgs>(args: SelectSubset<T, FornecedorProfileUpsertArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FornecedorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorProfileCountArgs} args - Arguments to filter FornecedorProfiles to count.
     * @example
     * // Count the number of FornecedorProfiles
     * const count = await prisma.fornecedorProfile.count({
     *   where: {
     *     // ... the filter for the FornecedorProfiles we want to count
     *   }
     * })
    **/
    count<T extends FornecedorProfileCountArgs>(
      args?: Subset<T, FornecedorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FornecedorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FornecedorProfileAggregateArgs>(args: Subset<T, FornecedorProfileAggregateArgs>): Prisma.PrismaPromise<GetFornecedorProfileAggregateType<T>>

    /**
     * Group by FornecedorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FornecedorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FornecedorProfileGroupByArgs['orderBy'] }
        : { orderBy?: FornecedorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FornecedorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FornecedorProfile model
   */
  readonly fields: FornecedorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FornecedorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FornecedorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    products<T extends FornecedorProfile$productsArgs<ExtArgs> = {}>(args?: Subset<T, FornecedorProfile$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FornecedorProfile model
   */ 
  interface FornecedorProfileFieldRefs {
    readonly id: FieldRef<"FornecedorProfile", 'String'>
    readonly userId: FieldRef<"FornecedorProfile", 'String'>
    readonly companyName: FieldRef<"FornecedorProfile", 'String'>
    readonly address: FieldRef<"FornecedorProfile", 'String'>
    readonly city: FieldRef<"FornecedorProfile", 'String'>
    readonly state: FieldRef<"FornecedorProfile", 'String'>
    readonly zipCode: FieldRef<"FornecedorProfile", 'String'>
    readonly shippingType: FieldRef<"FornecedorProfile", 'String'>
    readonly shippingDays: FieldRef<"FornecedorProfile", 'Int'>
    readonly createdAt: FieldRef<"FornecedorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"FornecedorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FornecedorProfile findUnique
   */
  export type FornecedorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorProfile to fetch.
     */
    where: FornecedorProfileWhereUniqueInput
  }

  /**
   * FornecedorProfile findUniqueOrThrow
   */
  export type FornecedorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorProfile to fetch.
     */
    where: FornecedorProfileWhereUniqueInput
  }

  /**
   * FornecedorProfile findFirst
   */
  export type FornecedorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorProfile to fetch.
     */
    where?: FornecedorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FornecedorProfiles to fetch.
     */
    orderBy?: FornecedorProfileOrderByWithRelationInput | FornecedorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FornecedorProfiles.
     */
    cursor?: FornecedorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FornecedorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FornecedorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FornecedorProfiles.
     */
    distinct?: FornecedorProfileScalarFieldEnum | FornecedorProfileScalarFieldEnum[]
  }

  /**
   * FornecedorProfile findFirstOrThrow
   */
  export type FornecedorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorProfile to fetch.
     */
    where?: FornecedorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FornecedorProfiles to fetch.
     */
    orderBy?: FornecedorProfileOrderByWithRelationInput | FornecedorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FornecedorProfiles.
     */
    cursor?: FornecedorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FornecedorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FornecedorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FornecedorProfiles.
     */
    distinct?: FornecedorProfileScalarFieldEnum | FornecedorProfileScalarFieldEnum[]
  }

  /**
   * FornecedorProfile findMany
   */
  export type FornecedorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorProfiles to fetch.
     */
    where?: FornecedorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FornecedorProfiles to fetch.
     */
    orderBy?: FornecedorProfileOrderByWithRelationInput | FornecedorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FornecedorProfiles.
     */
    cursor?: FornecedorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FornecedorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FornecedorProfiles.
     */
    skip?: number
    distinct?: FornecedorProfileScalarFieldEnum | FornecedorProfileScalarFieldEnum[]
  }

  /**
   * FornecedorProfile create
   */
  export type FornecedorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a FornecedorProfile.
     */
    data: XOR<FornecedorProfileCreateInput, FornecedorProfileUncheckedCreateInput>
  }

  /**
   * FornecedorProfile createMany
   */
  export type FornecedorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FornecedorProfiles.
     */
    data: FornecedorProfileCreateManyInput | FornecedorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FornecedorProfile createManyAndReturn
   */
  export type FornecedorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FornecedorProfiles.
     */
    data: FornecedorProfileCreateManyInput | FornecedorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FornecedorProfile update
   */
  export type FornecedorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a FornecedorProfile.
     */
    data: XOR<FornecedorProfileUpdateInput, FornecedorProfileUncheckedUpdateInput>
    /**
     * Choose, which FornecedorProfile to update.
     */
    where: FornecedorProfileWhereUniqueInput
  }

  /**
   * FornecedorProfile updateMany
   */
  export type FornecedorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FornecedorProfiles.
     */
    data: XOR<FornecedorProfileUpdateManyMutationInput, FornecedorProfileUncheckedUpdateManyInput>
    /**
     * Filter which FornecedorProfiles to update
     */
    where?: FornecedorProfileWhereInput
  }

  /**
   * FornecedorProfile upsert
   */
  export type FornecedorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the FornecedorProfile to update in case it exists.
     */
    where: FornecedorProfileWhereUniqueInput
    /**
     * In case the FornecedorProfile found by the `where` argument doesn't exist, create a new FornecedorProfile with this data.
     */
    create: XOR<FornecedorProfileCreateInput, FornecedorProfileUncheckedCreateInput>
    /**
     * In case the FornecedorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FornecedorProfileUpdateInput, FornecedorProfileUncheckedUpdateInput>
  }

  /**
   * FornecedorProfile delete
   */
  export type FornecedorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
    /**
     * Filter which FornecedorProfile to delete.
     */
    where: FornecedorProfileWhereUniqueInput
  }

  /**
   * FornecedorProfile deleteMany
   */
  export type FornecedorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FornecedorProfiles to delete
     */
    where?: FornecedorProfileWhereInput
  }

  /**
   * FornecedorProfile.products
   */
  export type FornecedorProfile$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * FornecedorProfile without action
   */
  export type FornecedorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorProfile
     */
    select?: FornecedorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    costPrice: Decimal | null
    suggestedPrice: Decimal | null
    stockQuantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    costPrice: Decimal | null
    suggestedPrice: Decimal | null
    stockQuantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    fornecedorProfileId: string | null
    title: string | null
    description: string | null
    costPrice: Decimal | null
    suggestedPrice: Decimal | null
    categoryId: string | null
    brand: string | null
    model: string | null
    supplierSku: string | null
    stockQuantity: number | null
    status: $Enums.ProductStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    fornecedorProfileId: string | null
    title: string | null
    description: string | null
    costPrice: Decimal | null
    suggestedPrice: Decimal | null
    categoryId: string | null
    brand: string | null
    model: string | null
    supplierSku: string | null
    stockQuantity: number | null
    status: $Enums.ProductStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    fornecedorProfileId: number
    title: number
    description: number
    costPrice: number
    suggestedPrice: number
    categoryId: number
    brand: number
    model: number
    attributes: number
    supplierSku: number
    stockQuantity: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    costPrice?: true
    suggestedPrice?: true
    stockQuantity?: true
  }

  export type ProductSumAggregateInputType = {
    costPrice?: true
    suggestedPrice?: true
    stockQuantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    fornecedorProfileId?: true
    title?: true
    description?: true
    costPrice?: true
    suggestedPrice?: true
    categoryId?: true
    brand?: true
    model?: true
    supplierSku?: true
    stockQuantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    fornecedorProfileId?: true
    title?: true
    description?: true
    costPrice?: true
    suggestedPrice?: true
    categoryId?: true
    brand?: true
    model?: true
    supplierSku?: true
    stockQuantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    fornecedorProfileId?: true
    title?: true
    description?: true
    costPrice?: true
    suggestedPrice?: true
    categoryId?: true
    brand?: true
    model?: true
    attributes?: true
    supplierSku?: true
    stockQuantity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    fornecedorProfileId: string
    title: string
    description: string
    costPrice: Decimal
    suggestedPrice: Decimal | null
    categoryId: string | null
    brand: string | null
    model: string | null
    attributes: JsonValue | null
    supplierSku: string
    stockQuantity: number
    status: $Enums.ProductStatus
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorProfileId?: boolean
    title?: boolean
    description?: boolean
    costPrice?: boolean
    suggestedPrice?: boolean
    categoryId?: boolean
    brand?: boolean
    model?: boolean
    attributes?: boolean
    supplierSku?: boolean
    stockQuantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorProfileDefaultArgs<ExtArgs>
    photos?: boolean | Product$photosArgs<ExtArgs>
    productMappings?: boolean | Product$productMappingsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorProfileId?: boolean
    title?: boolean
    description?: boolean
    costPrice?: boolean
    suggestedPrice?: boolean
    categoryId?: boolean
    brand?: boolean
    model?: boolean
    attributes?: boolean
    supplierSku?: boolean
    stockQuantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    fornecedorProfileId?: boolean
    title?: boolean
    description?: boolean
    costPrice?: boolean
    suggestedPrice?: boolean
    categoryId?: boolean
    brand?: boolean
    model?: boolean
    attributes?: boolean
    supplierSku?: boolean
    stockQuantity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorProfileDefaultArgs<ExtArgs>
    photos?: boolean | Product$photosArgs<ExtArgs>
    productMappings?: boolean | Product$productMappingsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorProfileDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      fornecedor: Prisma.$FornecedorProfilePayload<ExtArgs>
      photos: Prisma.$ProductPhotoPayload<ExtArgs>[]
      productMappings: Prisma.$ProductMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fornecedorProfileId: string
      title: string
      description: string
      costPrice: Prisma.Decimal
      suggestedPrice: Prisma.Decimal | null
      categoryId: string | null
      brand: string | null
      model: string | null
      attributes: Prisma.JsonValue | null
      supplierSku: string
      stockQuantity: number
      status: $Enums.ProductStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends FornecedorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FornecedorProfileDefaultArgs<ExtArgs>>): Prisma__FornecedorProfileClient<$Result.GetResult<Prisma.$FornecedorProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    photos<T extends Product$photosArgs<ExtArgs> = {}>(args?: Subset<T, Product$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "findMany"> | Null>
    productMappings<T extends Product$productMappingsArgs<ExtArgs> = {}>(args?: Subset<T, Product$productMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly fornecedorProfileId: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly costPrice: FieldRef<"Product", 'Decimal'>
    readonly suggestedPrice: FieldRef<"Product", 'Decimal'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly model: FieldRef<"Product", 'String'>
    readonly attributes: FieldRef<"Product", 'Json'>
    readonly supplierSku: FieldRef<"Product", 'String'>
    readonly stockQuantity: FieldRef<"Product", 'Int'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.photos
   */
  export type Product$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    where?: ProductPhotoWhereInput
    orderBy?: ProductPhotoOrderByWithRelationInput | ProductPhotoOrderByWithRelationInput[]
    cursor?: ProductPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPhotoScalarFieldEnum | ProductPhotoScalarFieldEnum[]
  }

  /**
   * Product.productMappings
   */
  export type Product$productMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    where?: ProductMappingWhereInput
    orderBy?: ProductMappingOrderByWithRelationInput | ProductMappingOrderByWithRelationInput[]
    cursor?: ProductMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMappingScalarFieldEnum | ProductMappingScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductPhoto
   */

  export type AggregateProductPhoto = {
    _count: ProductPhotoCountAggregateOutputType | null
    _avg: ProductPhotoAvgAggregateOutputType | null
    _sum: ProductPhotoSumAggregateOutputType | null
    _min: ProductPhotoMinAggregateOutputType | null
    _max: ProductPhotoMaxAggregateOutputType | null
  }

  export type ProductPhotoAvgAggregateOutputType = {
    order: number | null
  }

  export type ProductPhotoSumAggregateOutputType = {
    order: number | null
  }

  export type ProductPhotoMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    order: number | null
    isMain: boolean | null
    createdAt: Date | null
  }

  export type ProductPhotoMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    order: number | null
    isMain: boolean | null
    createdAt: Date | null
  }

  export type ProductPhotoCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    order: number
    isMain: number
    createdAt: number
    _all: number
  }


  export type ProductPhotoAvgAggregateInputType = {
    order?: true
  }

  export type ProductPhotoSumAggregateInputType = {
    order?: true
  }

  export type ProductPhotoMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    order?: true
    isMain?: true
    createdAt?: true
  }

  export type ProductPhotoMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    order?: true
    isMain?: true
    createdAt?: true
  }

  export type ProductPhotoCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    order?: true
    isMain?: true
    createdAt?: true
    _all?: true
  }

  export type ProductPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPhoto to aggregate.
     */
    where?: ProductPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPhotos to fetch.
     */
    orderBy?: ProductPhotoOrderByWithRelationInput | ProductPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPhotos
    **/
    _count?: true | ProductPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPhotoMaxAggregateInputType
  }

  export type GetProductPhotoAggregateType<T extends ProductPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPhoto[P]>
      : GetScalarType<T[P], AggregateProductPhoto[P]>
  }




  export type ProductPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPhotoWhereInput
    orderBy?: ProductPhotoOrderByWithAggregationInput | ProductPhotoOrderByWithAggregationInput[]
    by: ProductPhotoScalarFieldEnum[] | ProductPhotoScalarFieldEnum
    having?: ProductPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPhotoCountAggregateInputType | true
    _avg?: ProductPhotoAvgAggregateInputType
    _sum?: ProductPhotoSumAggregateInputType
    _min?: ProductPhotoMinAggregateInputType
    _max?: ProductPhotoMaxAggregateInputType
  }

  export type ProductPhotoGroupByOutputType = {
    id: string
    productId: string
    url: string
    order: number
    isMain: boolean
    createdAt: Date
    _count: ProductPhotoCountAggregateOutputType | null
    _avg: ProductPhotoAvgAggregateOutputType | null
    _sum: ProductPhotoSumAggregateOutputType | null
    _min: ProductPhotoMinAggregateOutputType | null
    _max: ProductPhotoMaxAggregateOutputType | null
  }

  type GetProductPhotoGroupByPayload<T extends ProductPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPhotoGroupByOutputType[P]>
        }
      >
    >


  export type ProductPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    order?: boolean
    isMain?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPhoto"]>

  export type ProductPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    order?: boolean
    isMain?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPhoto"]>

  export type ProductPhotoSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    order?: boolean
    isMain?: boolean
    createdAt?: boolean
  }

  export type ProductPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPhoto"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      url: string
      order: number
      isMain: boolean
      createdAt: Date
    }, ExtArgs["result"]["productPhoto"]>
    composites: {}
  }

  type ProductPhotoGetPayload<S extends boolean | null | undefined | ProductPhotoDefaultArgs> = $Result.GetResult<Prisma.$ProductPhotoPayload, S>

  type ProductPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductPhotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductPhotoCountAggregateInputType | true
    }

  export interface ProductPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPhoto'], meta: { name: 'ProductPhoto' } }
    /**
     * Find zero or one ProductPhoto that matches the filter.
     * @param {ProductPhotoFindUniqueArgs} args - Arguments to find a ProductPhoto
     * @example
     * // Get one ProductPhoto
     * const productPhoto = await prisma.productPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPhotoFindUniqueArgs>(args: SelectSubset<T, ProductPhotoFindUniqueArgs<ExtArgs>>): Prisma__ProductPhotoClient<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductPhoto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductPhotoFindUniqueOrThrowArgs} args - Arguments to find a ProductPhoto
     * @example
     * // Get one ProductPhoto
     * const productPhoto = await prisma.productPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPhotoClient<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPhotoFindFirstArgs} args - Arguments to find a ProductPhoto
     * @example
     * // Get one ProductPhoto
     * const productPhoto = await prisma.productPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPhotoFindFirstArgs>(args?: SelectSubset<T, ProductPhotoFindFirstArgs<ExtArgs>>): Prisma__ProductPhotoClient<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPhotoFindFirstOrThrowArgs} args - Arguments to find a ProductPhoto
     * @example
     * // Get one ProductPhoto
     * const productPhoto = await prisma.productPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPhotoClient<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPhotos
     * const productPhotos = await prisma.productPhoto.findMany()
     * 
     * // Get first 10 ProductPhotos
     * const productPhotos = await prisma.productPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPhotoWithIdOnly = await prisma.productPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPhotoFindManyArgs>(args?: SelectSubset<T, ProductPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductPhoto.
     * @param {ProductPhotoCreateArgs} args - Arguments to create a ProductPhoto.
     * @example
     * // Create one ProductPhoto
     * const ProductPhoto = await prisma.productPhoto.create({
     *   data: {
     *     // ... data to create a ProductPhoto
     *   }
     * })
     * 
     */
    create<T extends ProductPhotoCreateArgs>(args: SelectSubset<T, ProductPhotoCreateArgs<ExtArgs>>): Prisma__ProductPhotoClient<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductPhotos.
     * @param {ProductPhotoCreateManyArgs} args - Arguments to create many ProductPhotos.
     * @example
     * // Create many ProductPhotos
     * const productPhoto = await prisma.productPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPhotoCreateManyArgs>(args?: SelectSubset<T, ProductPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPhotos and returns the data saved in the database.
     * @param {ProductPhotoCreateManyAndReturnArgs} args - Arguments to create many ProductPhotos.
     * @example
     * // Create many ProductPhotos
     * const productPhoto = await prisma.productPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPhotos and only return the `id`
     * const productPhotoWithIdOnly = await prisma.productPhoto.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductPhoto.
     * @param {ProductPhotoDeleteArgs} args - Arguments to delete one ProductPhoto.
     * @example
     * // Delete one ProductPhoto
     * const ProductPhoto = await prisma.productPhoto.delete({
     *   where: {
     *     // ... filter to delete one ProductPhoto
     *   }
     * })
     * 
     */
    delete<T extends ProductPhotoDeleteArgs>(args: SelectSubset<T, ProductPhotoDeleteArgs<ExtArgs>>): Prisma__ProductPhotoClient<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductPhoto.
     * @param {ProductPhotoUpdateArgs} args - Arguments to update one ProductPhoto.
     * @example
     * // Update one ProductPhoto
     * const productPhoto = await prisma.productPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPhotoUpdateArgs>(args: SelectSubset<T, ProductPhotoUpdateArgs<ExtArgs>>): Prisma__ProductPhotoClient<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductPhotos.
     * @param {ProductPhotoDeleteManyArgs} args - Arguments to filter ProductPhotos to delete.
     * @example
     * // Delete a few ProductPhotos
     * const { count } = await prisma.productPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPhotoDeleteManyArgs>(args?: SelectSubset<T, ProductPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPhotos
     * const productPhoto = await prisma.productPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPhotoUpdateManyArgs>(args: SelectSubset<T, ProductPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPhoto.
     * @param {ProductPhotoUpsertArgs} args - Arguments to update or create a ProductPhoto.
     * @example
     * // Update or create a ProductPhoto
     * const productPhoto = await prisma.productPhoto.upsert({
     *   create: {
     *     // ... data to create a ProductPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPhoto we want to update
     *   }
     * })
     */
    upsert<T extends ProductPhotoUpsertArgs>(args: SelectSubset<T, ProductPhotoUpsertArgs<ExtArgs>>): Prisma__ProductPhotoClient<$Result.GetResult<Prisma.$ProductPhotoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPhotoCountArgs} args - Arguments to filter ProductPhotos to count.
     * @example
     * // Count the number of ProductPhotos
     * const count = await prisma.productPhoto.count({
     *   where: {
     *     // ... the filter for the ProductPhotos we want to count
     *   }
     * })
    **/
    count<T extends ProductPhotoCountArgs>(
      args?: Subset<T, ProductPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductPhotoAggregateArgs>(args: Subset<T, ProductPhotoAggregateArgs>): Prisma.PrismaPromise<GetProductPhotoAggregateType<T>>

    /**
     * Group by ProductPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPhotoGroupByArgs['orderBy'] }
        : { orderBy?: ProductPhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPhoto model
   */
  readonly fields: ProductPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPhoto model
   */ 
  interface ProductPhotoFieldRefs {
    readonly id: FieldRef<"ProductPhoto", 'String'>
    readonly productId: FieldRef<"ProductPhoto", 'String'>
    readonly url: FieldRef<"ProductPhoto", 'String'>
    readonly order: FieldRef<"ProductPhoto", 'Int'>
    readonly isMain: FieldRef<"ProductPhoto", 'Boolean'>
    readonly createdAt: FieldRef<"ProductPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductPhoto findUnique
   */
  export type ProductPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProductPhoto to fetch.
     */
    where: ProductPhotoWhereUniqueInput
  }

  /**
   * ProductPhoto findUniqueOrThrow
   */
  export type ProductPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProductPhoto to fetch.
     */
    where: ProductPhotoWhereUniqueInput
  }

  /**
   * ProductPhoto findFirst
   */
  export type ProductPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProductPhoto to fetch.
     */
    where?: ProductPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPhotos to fetch.
     */
    orderBy?: ProductPhotoOrderByWithRelationInput | ProductPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPhotos.
     */
    cursor?: ProductPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPhotos.
     */
    distinct?: ProductPhotoScalarFieldEnum | ProductPhotoScalarFieldEnum[]
  }

  /**
   * ProductPhoto findFirstOrThrow
   */
  export type ProductPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProductPhoto to fetch.
     */
    where?: ProductPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPhotos to fetch.
     */
    orderBy?: ProductPhotoOrderByWithRelationInput | ProductPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPhotos.
     */
    cursor?: ProductPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPhotos.
     */
    distinct?: ProductPhotoScalarFieldEnum | ProductPhotoScalarFieldEnum[]
  }

  /**
   * ProductPhoto findMany
   */
  export type ProductPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProductPhotos to fetch.
     */
    where?: ProductPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPhotos to fetch.
     */
    orderBy?: ProductPhotoOrderByWithRelationInput | ProductPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPhotos.
     */
    cursor?: ProductPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPhotos.
     */
    skip?: number
    distinct?: ProductPhotoScalarFieldEnum | ProductPhotoScalarFieldEnum[]
  }

  /**
   * ProductPhoto create
   */
  export type ProductPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPhoto.
     */
    data: XOR<ProductPhotoCreateInput, ProductPhotoUncheckedCreateInput>
  }

  /**
   * ProductPhoto createMany
   */
  export type ProductPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPhotos.
     */
    data: ProductPhotoCreateManyInput | ProductPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPhoto createManyAndReturn
   */
  export type ProductPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductPhotos.
     */
    data: ProductPhotoCreateManyInput | ProductPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPhoto update
   */
  export type ProductPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPhoto.
     */
    data: XOR<ProductPhotoUpdateInput, ProductPhotoUncheckedUpdateInput>
    /**
     * Choose, which ProductPhoto to update.
     */
    where: ProductPhotoWhereUniqueInput
  }

  /**
   * ProductPhoto updateMany
   */
  export type ProductPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPhotos.
     */
    data: XOR<ProductPhotoUpdateManyMutationInput, ProductPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ProductPhotos to update
     */
    where?: ProductPhotoWhereInput
  }

  /**
   * ProductPhoto upsert
   */
  export type ProductPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPhoto to update in case it exists.
     */
    where: ProductPhotoWhereUniqueInput
    /**
     * In case the ProductPhoto found by the `where` argument doesn't exist, create a new ProductPhoto with this data.
     */
    create: XOR<ProductPhotoCreateInput, ProductPhotoUncheckedCreateInput>
    /**
     * In case the ProductPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPhotoUpdateInput, ProductPhotoUncheckedUpdateInput>
  }

  /**
   * ProductPhoto delete
   */
  export type ProductPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
    /**
     * Filter which ProductPhoto to delete.
     */
    where: ProductPhotoWhereUniqueInput
  }

  /**
   * ProductPhoto deleteMany
   */
  export type ProductPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPhotos to delete
     */
    where?: ProductPhotoWhereInput
  }

  /**
   * ProductPhoto without action
   */
  export type ProductPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPhoto
     */
    select?: ProductPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPhotoInclude<ExtArgs> | null
  }


  /**
   * Model MeliIntegration
   */

  export type AggregateMeliIntegration = {
    _count: MeliIntegrationCountAggregateOutputType | null
    _avg: MeliIntegrationAvgAggregateOutputType | null
    _sum: MeliIntegrationSumAggregateOutputType | null
    _min: MeliIntegrationMinAggregateOutputType | null
    _max: MeliIntegrationMaxAggregateOutputType | null
  }

  export type MeliIntegrationAvgAggregateOutputType = {
    meliUserId: number | null
  }

  export type MeliIntegrationSumAggregateOutputType = {
    meliUserId: number | null
  }

  export type MeliIntegrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    meliUserId: number | null
    meliNickname: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastSyncAt: Date | null
  }

  export type MeliIntegrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    meliUserId: number | null
    meliNickname: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastSyncAt: Date | null
  }

  export type MeliIntegrationCountAggregateOutputType = {
    id: number
    userId: number
    meliUserId: number
    meliNickname: number
    accessToken: number
    refreshToken: number
    tokenExpiresAt: number
    scopes: number
    isActive: number
    createdAt: number
    updatedAt: number
    lastSyncAt: number
    _all: number
  }


  export type MeliIntegrationAvgAggregateInputType = {
    meliUserId?: true
  }

  export type MeliIntegrationSumAggregateInputType = {
    meliUserId?: true
  }

  export type MeliIntegrationMinAggregateInputType = {
    id?: true
    userId?: true
    meliUserId?: true
    meliNickname?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastSyncAt?: true
  }

  export type MeliIntegrationMaxAggregateInputType = {
    id?: true
    userId?: true
    meliUserId?: true
    meliNickname?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastSyncAt?: true
  }

  export type MeliIntegrationCountAggregateInputType = {
    id?: true
    userId?: true
    meliUserId?: true
    meliNickname?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    scopes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastSyncAt?: true
    _all?: true
  }

  export type MeliIntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeliIntegration to aggregate.
     */
    where?: MeliIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeliIntegrations to fetch.
     */
    orderBy?: MeliIntegrationOrderByWithRelationInput | MeliIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeliIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeliIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeliIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeliIntegrations
    **/
    _count?: true | MeliIntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeliIntegrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeliIntegrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeliIntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeliIntegrationMaxAggregateInputType
  }

  export type GetMeliIntegrationAggregateType<T extends MeliIntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateMeliIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeliIntegration[P]>
      : GetScalarType<T[P], AggregateMeliIntegration[P]>
  }




  export type MeliIntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeliIntegrationWhereInput
    orderBy?: MeliIntegrationOrderByWithAggregationInput | MeliIntegrationOrderByWithAggregationInput[]
    by: MeliIntegrationScalarFieldEnum[] | MeliIntegrationScalarFieldEnum
    having?: MeliIntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeliIntegrationCountAggregateInputType | true
    _avg?: MeliIntegrationAvgAggregateInputType
    _sum?: MeliIntegrationSumAggregateInputType
    _min?: MeliIntegrationMinAggregateInputType
    _max?: MeliIntegrationMaxAggregateInputType
  }

  export type MeliIntegrationGroupByOutputType = {
    id: string
    userId: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken: string | null
    tokenExpiresAt: Date
    scopes: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    lastSyncAt: Date | null
    _count: MeliIntegrationCountAggregateOutputType | null
    _avg: MeliIntegrationAvgAggregateOutputType | null
    _sum: MeliIntegrationSumAggregateOutputType | null
    _min: MeliIntegrationMinAggregateOutputType | null
    _max: MeliIntegrationMaxAggregateOutputType | null
  }

  type GetMeliIntegrationGroupByPayload<T extends MeliIntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeliIntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeliIntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeliIntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], MeliIntegrationGroupByOutputType[P]>
        }
      >
    >


  export type MeliIntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    meliUserId?: boolean
    meliNickname?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    scopes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSyncAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    productMappings?: boolean | MeliIntegration$productMappingsArgs<ExtArgs>
    orders?: boolean | MeliIntegration$ordersArgs<ExtArgs>
    _count?: boolean | MeliIntegrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meliIntegration"]>

  export type MeliIntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    meliUserId?: boolean
    meliNickname?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    scopes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSyncAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meliIntegration"]>

  export type MeliIntegrationSelectScalar = {
    id?: boolean
    userId?: boolean
    meliUserId?: boolean
    meliNickname?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    scopes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSyncAt?: boolean
  }

  export type MeliIntegrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    productMappings?: boolean | MeliIntegration$productMappingsArgs<ExtArgs>
    orders?: boolean | MeliIntegration$ordersArgs<ExtArgs>
    _count?: boolean | MeliIntegrationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeliIntegrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeliIntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeliIntegration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      productMappings: Prisma.$ProductMappingPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      meliUserId: number
      meliNickname: string
      accessToken: string
      refreshToken: string | null
      tokenExpiresAt: Date
      scopes: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      lastSyncAt: Date | null
    }, ExtArgs["result"]["meliIntegration"]>
    composites: {}
  }

  type MeliIntegrationGetPayload<S extends boolean | null | undefined | MeliIntegrationDefaultArgs> = $Result.GetResult<Prisma.$MeliIntegrationPayload, S>

  type MeliIntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeliIntegrationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeliIntegrationCountAggregateInputType | true
    }

  export interface MeliIntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeliIntegration'], meta: { name: 'MeliIntegration' } }
    /**
     * Find zero or one MeliIntegration that matches the filter.
     * @param {MeliIntegrationFindUniqueArgs} args - Arguments to find a MeliIntegration
     * @example
     * // Get one MeliIntegration
     * const meliIntegration = await prisma.meliIntegration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeliIntegrationFindUniqueArgs>(args: SelectSubset<T, MeliIntegrationFindUniqueArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MeliIntegration that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MeliIntegrationFindUniqueOrThrowArgs} args - Arguments to find a MeliIntegration
     * @example
     * // Get one MeliIntegration
     * const meliIntegration = await prisma.meliIntegration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeliIntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, MeliIntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MeliIntegration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeliIntegrationFindFirstArgs} args - Arguments to find a MeliIntegration
     * @example
     * // Get one MeliIntegration
     * const meliIntegration = await prisma.meliIntegration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeliIntegrationFindFirstArgs>(args?: SelectSubset<T, MeliIntegrationFindFirstArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MeliIntegration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeliIntegrationFindFirstOrThrowArgs} args - Arguments to find a MeliIntegration
     * @example
     * // Get one MeliIntegration
     * const meliIntegration = await prisma.meliIntegration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeliIntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, MeliIntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MeliIntegrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeliIntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeliIntegrations
     * const meliIntegrations = await prisma.meliIntegration.findMany()
     * 
     * // Get first 10 MeliIntegrations
     * const meliIntegrations = await prisma.meliIntegration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meliIntegrationWithIdOnly = await prisma.meliIntegration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeliIntegrationFindManyArgs>(args?: SelectSubset<T, MeliIntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MeliIntegration.
     * @param {MeliIntegrationCreateArgs} args - Arguments to create a MeliIntegration.
     * @example
     * // Create one MeliIntegration
     * const MeliIntegration = await prisma.meliIntegration.create({
     *   data: {
     *     // ... data to create a MeliIntegration
     *   }
     * })
     * 
     */
    create<T extends MeliIntegrationCreateArgs>(args: SelectSubset<T, MeliIntegrationCreateArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MeliIntegrations.
     * @param {MeliIntegrationCreateManyArgs} args - Arguments to create many MeliIntegrations.
     * @example
     * // Create many MeliIntegrations
     * const meliIntegration = await prisma.meliIntegration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeliIntegrationCreateManyArgs>(args?: SelectSubset<T, MeliIntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeliIntegrations and returns the data saved in the database.
     * @param {MeliIntegrationCreateManyAndReturnArgs} args - Arguments to create many MeliIntegrations.
     * @example
     * // Create many MeliIntegrations
     * const meliIntegration = await prisma.meliIntegration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeliIntegrations and only return the `id`
     * const meliIntegrationWithIdOnly = await prisma.meliIntegration.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeliIntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, MeliIntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MeliIntegration.
     * @param {MeliIntegrationDeleteArgs} args - Arguments to delete one MeliIntegration.
     * @example
     * // Delete one MeliIntegration
     * const MeliIntegration = await prisma.meliIntegration.delete({
     *   where: {
     *     // ... filter to delete one MeliIntegration
     *   }
     * })
     * 
     */
    delete<T extends MeliIntegrationDeleteArgs>(args: SelectSubset<T, MeliIntegrationDeleteArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MeliIntegration.
     * @param {MeliIntegrationUpdateArgs} args - Arguments to update one MeliIntegration.
     * @example
     * // Update one MeliIntegration
     * const meliIntegration = await prisma.meliIntegration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeliIntegrationUpdateArgs>(args: SelectSubset<T, MeliIntegrationUpdateArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MeliIntegrations.
     * @param {MeliIntegrationDeleteManyArgs} args - Arguments to filter MeliIntegrations to delete.
     * @example
     * // Delete a few MeliIntegrations
     * const { count } = await prisma.meliIntegration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeliIntegrationDeleteManyArgs>(args?: SelectSubset<T, MeliIntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeliIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeliIntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeliIntegrations
     * const meliIntegration = await prisma.meliIntegration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeliIntegrationUpdateManyArgs>(args: SelectSubset<T, MeliIntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MeliIntegration.
     * @param {MeliIntegrationUpsertArgs} args - Arguments to update or create a MeliIntegration.
     * @example
     * // Update or create a MeliIntegration
     * const meliIntegration = await prisma.meliIntegration.upsert({
     *   create: {
     *     // ... data to create a MeliIntegration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeliIntegration we want to update
     *   }
     * })
     */
    upsert<T extends MeliIntegrationUpsertArgs>(args: SelectSubset<T, MeliIntegrationUpsertArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MeliIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeliIntegrationCountArgs} args - Arguments to filter MeliIntegrations to count.
     * @example
     * // Count the number of MeliIntegrations
     * const count = await prisma.meliIntegration.count({
     *   where: {
     *     // ... the filter for the MeliIntegrations we want to count
     *   }
     * })
    **/
    count<T extends MeliIntegrationCountArgs>(
      args?: Subset<T, MeliIntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeliIntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeliIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeliIntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeliIntegrationAggregateArgs>(args: Subset<T, MeliIntegrationAggregateArgs>): Prisma.PrismaPromise<GetMeliIntegrationAggregateType<T>>

    /**
     * Group by MeliIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeliIntegrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeliIntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeliIntegrationGroupByArgs['orderBy'] }
        : { orderBy?: MeliIntegrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeliIntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeliIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeliIntegration model
   */
  readonly fields: MeliIntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeliIntegration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeliIntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    productMappings<T extends MeliIntegration$productMappingsArgs<ExtArgs> = {}>(args?: Subset<T, MeliIntegration$productMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends MeliIntegration$ordersArgs<ExtArgs> = {}>(args?: Subset<T, MeliIntegration$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeliIntegration model
   */ 
  interface MeliIntegrationFieldRefs {
    readonly id: FieldRef<"MeliIntegration", 'String'>
    readonly userId: FieldRef<"MeliIntegration", 'String'>
    readonly meliUserId: FieldRef<"MeliIntegration", 'Int'>
    readonly meliNickname: FieldRef<"MeliIntegration", 'String'>
    readonly accessToken: FieldRef<"MeliIntegration", 'String'>
    readonly refreshToken: FieldRef<"MeliIntegration", 'String'>
    readonly tokenExpiresAt: FieldRef<"MeliIntegration", 'DateTime'>
    readonly scopes: FieldRef<"MeliIntegration", 'String[]'>
    readonly isActive: FieldRef<"MeliIntegration", 'Boolean'>
    readonly createdAt: FieldRef<"MeliIntegration", 'DateTime'>
    readonly updatedAt: FieldRef<"MeliIntegration", 'DateTime'>
    readonly lastSyncAt: FieldRef<"MeliIntegration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeliIntegration findUnique
   */
  export type MeliIntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which MeliIntegration to fetch.
     */
    where: MeliIntegrationWhereUniqueInput
  }

  /**
   * MeliIntegration findUniqueOrThrow
   */
  export type MeliIntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which MeliIntegration to fetch.
     */
    where: MeliIntegrationWhereUniqueInput
  }

  /**
   * MeliIntegration findFirst
   */
  export type MeliIntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which MeliIntegration to fetch.
     */
    where?: MeliIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeliIntegrations to fetch.
     */
    orderBy?: MeliIntegrationOrderByWithRelationInput | MeliIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeliIntegrations.
     */
    cursor?: MeliIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeliIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeliIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeliIntegrations.
     */
    distinct?: MeliIntegrationScalarFieldEnum | MeliIntegrationScalarFieldEnum[]
  }

  /**
   * MeliIntegration findFirstOrThrow
   */
  export type MeliIntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which MeliIntegration to fetch.
     */
    where?: MeliIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeliIntegrations to fetch.
     */
    orderBy?: MeliIntegrationOrderByWithRelationInput | MeliIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeliIntegrations.
     */
    cursor?: MeliIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeliIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeliIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeliIntegrations.
     */
    distinct?: MeliIntegrationScalarFieldEnum | MeliIntegrationScalarFieldEnum[]
  }

  /**
   * MeliIntegration findMany
   */
  export type MeliIntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which MeliIntegrations to fetch.
     */
    where?: MeliIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeliIntegrations to fetch.
     */
    orderBy?: MeliIntegrationOrderByWithRelationInput | MeliIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeliIntegrations.
     */
    cursor?: MeliIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeliIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeliIntegrations.
     */
    skip?: number
    distinct?: MeliIntegrationScalarFieldEnum | MeliIntegrationScalarFieldEnum[]
  }

  /**
   * MeliIntegration create
   */
  export type MeliIntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * The data needed to create a MeliIntegration.
     */
    data: XOR<MeliIntegrationCreateInput, MeliIntegrationUncheckedCreateInput>
  }

  /**
   * MeliIntegration createMany
   */
  export type MeliIntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeliIntegrations.
     */
    data: MeliIntegrationCreateManyInput | MeliIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeliIntegration createManyAndReturn
   */
  export type MeliIntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MeliIntegrations.
     */
    data: MeliIntegrationCreateManyInput | MeliIntegrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeliIntegration update
   */
  export type MeliIntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * The data needed to update a MeliIntegration.
     */
    data: XOR<MeliIntegrationUpdateInput, MeliIntegrationUncheckedUpdateInput>
    /**
     * Choose, which MeliIntegration to update.
     */
    where: MeliIntegrationWhereUniqueInput
  }

  /**
   * MeliIntegration updateMany
   */
  export type MeliIntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeliIntegrations.
     */
    data: XOR<MeliIntegrationUpdateManyMutationInput, MeliIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which MeliIntegrations to update
     */
    where?: MeliIntegrationWhereInput
  }

  /**
   * MeliIntegration upsert
   */
  export type MeliIntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * The filter to search for the MeliIntegration to update in case it exists.
     */
    where: MeliIntegrationWhereUniqueInput
    /**
     * In case the MeliIntegration found by the `where` argument doesn't exist, create a new MeliIntegration with this data.
     */
    create: XOR<MeliIntegrationCreateInput, MeliIntegrationUncheckedCreateInput>
    /**
     * In case the MeliIntegration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeliIntegrationUpdateInput, MeliIntegrationUncheckedUpdateInput>
  }

  /**
   * MeliIntegration delete
   */
  export type MeliIntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
    /**
     * Filter which MeliIntegration to delete.
     */
    where: MeliIntegrationWhereUniqueInput
  }

  /**
   * MeliIntegration deleteMany
   */
  export type MeliIntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeliIntegrations to delete
     */
    where?: MeliIntegrationWhereInput
  }

  /**
   * MeliIntegration.productMappings
   */
  export type MeliIntegration$productMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    where?: ProductMappingWhereInput
    orderBy?: ProductMappingOrderByWithRelationInput | ProductMappingOrderByWithRelationInput[]
    cursor?: ProductMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMappingScalarFieldEnum | ProductMappingScalarFieldEnum[]
  }

  /**
   * MeliIntegration.orders
   */
  export type MeliIntegration$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * MeliIntegration without action
   */
  export type MeliIntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeliIntegration
     */
    select?: MeliIntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeliIntegrationInclude<ExtArgs> | null
  }


  /**
   * Model ProductMapping
   */

  export type AggregateProductMapping = {
    _count: ProductMappingCountAggregateOutputType | null
    _avg: ProductMappingAvgAggregateOutputType | null
    _sum: ProductMappingSumAggregateOutputType | null
    _min: ProductMappingMinAggregateOutputType | null
    _max: ProductMappingMaxAggregateOutputType | null
  }

  export type ProductMappingAvgAggregateOutputType = {
    publishedPrice: Decimal | null
    markupPercent: Decimal | null
    markupFixed: Decimal | null
    announcedStock: number | null
  }

  export type ProductMappingSumAggregateOutputType = {
    publishedPrice: Decimal | null
    markupPercent: Decimal | null
    markupFixed: Decimal | null
    announcedStock: number | null
  }

  export type ProductMappingMinAggregateOutputType = {
    id: string | null
    productId: string | null
    sellerId: string | null
    meliIntegrationId: string | null
    meliItemId: string | null
    meliPermalink: string | null
    publishedPrice: Decimal | null
    markupPercent: Decimal | null
    markupFixed: Decimal | null
    status: $Enums.MappingStatus | null
    syncError: string | null
    lastSyncAt: Date | null
    announcedStock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMappingMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    sellerId: string | null
    meliIntegrationId: string | null
    meliItemId: string | null
    meliPermalink: string | null
    publishedPrice: Decimal | null
    markupPercent: Decimal | null
    markupFixed: Decimal | null
    status: $Enums.MappingStatus | null
    syncError: string | null
    lastSyncAt: Date | null
    announcedStock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMappingCountAggregateOutputType = {
    id: number
    productId: number
    sellerId: number
    meliIntegrationId: number
    meliItemId: number
    meliPermalink: number
    publishedPrice: number
    markupPercent: number
    markupFixed: number
    status: number
    syncError: number
    lastSyncAt: number
    announcedStock: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMappingAvgAggregateInputType = {
    publishedPrice?: true
    markupPercent?: true
    markupFixed?: true
    announcedStock?: true
  }

  export type ProductMappingSumAggregateInputType = {
    publishedPrice?: true
    markupPercent?: true
    markupFixed?: true
    announcedStock?: true
  }

  export type ProductMappingMinAggregateInputType = {
    id?: true
    productId?: true
    sellerId?: true
    meliIntegrationId?: true
    meliItemId?: true
    meliPermalink?: true
    publishedPrice?: true
    markupPercent?: true
    markupFixed?: true
    status?: true
    syncError?: true
    lastSyncAt?: true
    announcedStock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMappingMaxAggregateInputType = {
    id?: true
    productId?: true
    sellerId?: true
    meliIntegrationId?: true
    meliItemId?: true
    meliPermalink?: true
    publishedPrice?: true
    markupPercent?: true
    markupFixed?: true
    status?: true
    syncError?: true
    lastSyncAt?: true
    announcedStock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMappingCountAggregateInputType = {
    id?: true
    productId?: true
    sellerId?: true
    meliIntegrationId?: true
    meliItemId?: true
    meliPermalink?: true
    publishedPrice?: true
    markupPercent?: true
    markupFixed?: true
    status?: true
    syncError?: true
    lastSyncAt?: true
    announcedStock?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMapping to aggregate.
     */
    where?: ProductMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMappings to fetch.
     */
    orderBy?: ProductMappingOrderByWithRelationInput | ProductMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMappings
    **/
    _count?: true | ProductMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMappingMaxAggregateInputType
  }

  export type GetProductMappingAggregateType<T extends ProductMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMapping[P]>
      : GetScalarType<T[P], AggregateProductMapping[P]>
  }




  export type ProductMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMappingWhereInput
    orderBy?: ProductMappingOrderByWithAggregationInput | ProductMappingOrderByWithAggregationInput[]
    by: ProductMappingScalarFieldEnum[] | ProductMappingScalarFieldEnum
    having?: ProductMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMappingCountAggregateInputType | true
    _avg?: ProductMappingAvgAggregateInputType
    _sum?: ProductMappingSumAggregateInputType
    _min?: ProductMappingMinAggregateInputType
    _max?: ProductMappingMaxAggregateInputType
  }

  export type ProductMappingGroupByOutputType = {
    id: string
    productId: string
    sellerId: string
    meliIntegrationId: string
    meliItemId: string | null
    meliPermalink: string | null
    publishedPrice: Decimal | null
    markupPercent: Decimal | null
    markupFixed: Decimal | null
    status: $Enums.MappingStatus
    syncError: string | null
    lastSyncAt: Date | null
    announcedStock: number
    createdAt: Date
    updatedAt: Date
    _count: ProductMappingCountAggregateOutputType | null
    _avg: ProductMappingAvgAggregateOutputType | null
    _sum: ProductMappingSumAggregateOutputType | null
    _min: ProductMappingMinAggregateOutputType | null
    _max: ProductMappingMaxAggregateOutputType | null
  }

  type GetProductMappingGroupByPayload<T extends ProductMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMappingGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMappingGroupByOutputType[P]>
        }
      >
    >


  export type ProductMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sellerId?: boolean
    meliIntegrationId?: boolean
    meliItemId?: boolean
    meliPermalink?: boolean
    publishedPrice?: boolean
    markupPercent?: boolean
    markupFixed?: boolean
    status?: boolean
    syncError?: boolean
    lastSyncAt?: boolean
    announcedStock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    meliIntegration?: boolean | MeliIntegrationDefaultArgs<ExtArgs>
    orders?: boolean | ProductMapping$ordersArgs<ExtArgs>
    _count?: boolean | ProductMappingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMapping"]>

  export type ProductMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sellerId?: boolean
    meliIntegrationId?: boolean
    meliItemId?: boolean
    meliPermalink?: boolean
    publishedPrice?: boolean
    markupPercent?: boolean
    markupFixed?: boolean
    status?: boolean
    syncError?: boolean
    lastSyncAt?: boolean
    announcedStock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    meliIntegration?: boolean | MeliIntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMapping"]>

  export type ProductMappingSelectScalar = {
    id?: boolean
    productId?: boolean
    sellerId?: boolean
    meliIntegrationId?: boolean
    meliItemId?: boolean
    meliPermalink?: boolean
    publishedPrice?: boolean
    markupPercent?: boolean
    markupFixed?: boolean
    status?: boolean
    syncError?: boolean
    lastSyncAt?: boolean
    announcedStock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    meliIntegration?: boolean | MeliIntegrationDefaultArgs<ExtArgs>
    orders?: boolean | ProductMapping$ordersArgs<ExtArgs>
    _count?: boolean | ProductMappingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    meliIntegration?: boolean | MeliIntegrationDefaultArgs<ExtArgs>
  }

  export type $ProductMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductMapping"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
      meliIntegration: Prisma.$MeliIntegrationPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      sellerId: string
      meliIntegrationId: string
      meliItemId: string | null
      meliPermalink: string | null
      publishedPrice: Prisma.Decimal | null
      markupPercent: Prisma.Decimal | null
      markupFixed: Prisma.Decimal | null
      status: $Enums.MappingStatus
      syncError: string | null
      lastSyncAt: Date | null
      announcedStock: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productMapping"]>
    composites: {}
  }

  type ProductMappingGetPayload<S extends boolean | null | undefined | ProductMappingDefaultArgs> = $Result.GetResult<Prisma.$ProductMappingPayload, S>

  type ProductMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductMappingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductMappingCountAggregateInputType | true
    }

  export interface ProductMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductMapping'], meta: { name: 'ProductMapping' } }
    /**
     * Find zero or one ProductMapping that matches the filter.
     * @param {ProductMappingFindUniqueArgs} args - Arguments to find a ProductMapping
     * @example
     * // Get one ProductMapping
     * const productMapping = await prisma.productMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductMappingFindUniqueArgs>(args: SelectSubset<T, ProductMappingFindUniqueArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductMapping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductMappingFindUniqueOrThrowArgs} args - Arguments to find a ProductMapping
     * @example
     * // Get one ProductMapping
     * const productMapping = await prisma.productMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMappingFindFirstArgs} args - Arguments to find a ProductMapping
     * @example
     * // Get one ProductMapping
     * const productMapping = await prisma.productMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductMappingFindFirstArgs>(args?: SelectSubset<T, ProductMappingFindFirstArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMappingFindFirstOrThrowArgs} args - Arguments to find a ProductMapping
     * @example
     * // Get one ProductMapping
     * const productMapping = await prisma.productMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMappings
     * const productMappings = await prisma.productMapping.findMany()
     * 
     * // Get first 10 ProductMappings
     * const productMappings = await prisma.productMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productMappingWithIdOnly = await prisma.productMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductMappingFindManyArgs>(args?: SelectSubset<T, ProductMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductMapping.
     * @param {ProductMappingCreateArgs} args - Arguments to create a ProductMapping.
     * @example
     * // Create one ProductMapping
     * const ProductMapping = await prisma.productMapping.create({
     *   data: {
     *     // ... data to create a ProductMapping
     *   }
     * })
     * 
     */
    create<T extends ProductMappingCreateArgs>(args: SelectSubset<T, ProductMappingCreateArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductMappings.
     * @param {ProductMappingCreateManyArgs} args - Arguments to create many ProductMappings.
     * @example
     * // Create many ProductMappings
     * const productMapping = await prisma.productMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductMappingCreateManyArgs>(args?: SelectSubset<T, ProductMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductMappings and returns the data saved in the database.
     * @param {ProductMappingCreateManyAndReturnArgs} args - Arguments to create many ProductMappings.
     * @example
     * // Create many ProductMappings
     * const productMapping = await prisma.productMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductMappings and only return the `id`
     * const productMappingWithIdOnly = await prisma.productMapping.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductMapping.
     * @param {ProductMappingDeleteArgs} args - Arguments to delete one ProductMapping.
     * @example
     * // Delete one ProductMapping
     * const ProductMapping = await prisma.productMapping.delete({
     *   where: {
     *     // ... filter to delete one ProductMapping
     *   }
     * })
     * 
     */
    delete<T extends ProductMappingDeleteArgs>(args: SelectSubset<T, ProductMappingDeleteArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductMapping.
     * @param {ProductMappingUpdateArgs} args - Arguments to update one ProductMapping.
     * @example
     * // Update one ProductMapping
     * const productMapping = await prisma.productMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductMappingUpdateArgs>(args: SelectSubset<T, ProductMappingUpdateArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductMappings.
     * @param {ProductMappingDeleteManyArgs} args - Arguments to filter ProductMappings to delete.
     * @example
     * // Delete a few ProductMappings
     * const { count } = await prisma.productMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductMappingDeleteManyArgs>(args?: SelectSubset<T, ProductMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMappings
     * const productMapping = await prisma.productMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductMappingUpdateManyArgs>(args: SelectSubset<T, ProductMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductMapping.
     * @param {ProductMappingUpsertArgs} args - Arguments to update or create a ProductMapping.
     * @example
     * // Update or create a ProductMapping
     * const productMapping = await prisma.productMapping.upsert({
     *   create: {
     *     // ... data to create a ProductMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMapping we want to update
     *   }
     * })
     */
    upsert<T extends ProductMappingUpsertArgs>(args: SelectSubset<T, ProductMappingUpsertArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMappingCountArgs} args - Arguments to filter ProductMappings to count.
     * @example
     * // Count the number of ProductMappings
     * const count = await prisma.productMapping.count({
     *   where: {
     *     // ... the filter for the ProductMappings we want to count
     *   }
     * })
    **/
    count<T extends ProductMappingCountArgs>(
      args?: Subset<T, ProductMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductMappingAggregateArgs>(args: Subset<T, ProductMappingAggregateArgs>): Prisma.PrismaPromise<GetProductMappingAggregateType<T>>

    /**
     * Group by ProductMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMappingGroupByArgs['orderBy'] }
        : { orderBy?: ProductMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductMapping model
   */
  readonly fields: ProductMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    meliIntegration<T extends MeliIntegrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeliIntegrationDefaultArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends ProductMapping$ordersArgs<ExtArgs> = {}>(args?: Subset<T, ProductMapping$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductMapping model
   */ 
  interface ProductMappingFieldRefs {
    readonly id: FieldRef<"ProductMapping", 'String'>
    readonly productId: FieldRef<"ProductMapping", 'String'>
    readonly sellerId: FieldRef<"ProductMapping", 'String'>
    readonly meliIntegrationId: FieldRef<"ProductMapping", 'String'>
    readonly meliItemId: FieldRef<"ProductMapping", 'String'>
    readonly meliPermalink: FieldRef<"ProductMapping", 'String'>
    readonly publishedPrice: FieldRef<"ProductMapping", 'Decimal'>
    readonly markupPercent: FieldRef<"ProductMapping", 'Decimal'>
    readonly markupFixed: FieldRef<"ProductMapping", 'Decimal'>
    readonly status: FieldRef<"ProductMapping", 'MappingStatus'>
    readonly syncError: FieldRef<"ProductMapping", 'String'>
    readonly lastSyncAt: FieldRef<"ProductMapping", 'DateTime'>
    readonly announcedStock: FieldRef<"ProductMapping", 'Int'>
    readonly createdAt: FieldRef<"ProductMapping", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductMapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductMapping findUnique
   */
  export type ProductMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductMapping to fetch.
     */
    where: ProductMappingWhereUniqueInput
  }

  /**
   * ProductMapping findUniqueOrThrow
   */
  export type ProductMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductMapping to fetch.
     */
    where: ProductMappingWhereUniqueInput
  }

  /**
   * ProductMapping findFirst
   */
  export type ProductMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductMapping to fetch.
     */
    where?: ProductMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMappings to fetch.
     */
    orderBy?: ProductMappingOrderByWithRelationInput | ProductMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMappings.
     */
    cursor?: ProductMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMappings.
     */
    distinct?: ProductMappingScalarFieldEnum | ProductMappingScalarFieldEnum[]
  }

  /**
   * ProductMapping findFirstOrThrow
   */
  export type ProductMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductMapping to fetch.
     */
    where?: ProductMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMappings to fetch.
     */
    orderBy?: ProductMappingOrderByWithRelationInput | ProductMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMappings.
     */
    cursor?: ProductMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMappings.
     */
    distinct?: ProductMappingScalarFieldEnum | ProductMappingScalarFieldEnum[]
  }

  /**
   * ProductMapping findMany
   */
  export type ProductMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductMappings to fetch.
     */
    where?: ProductMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMappings to fetch.
     */
    orderBy?: ProductMappingOrderByWithRelationInput | ProductMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMappings.
     */
    cursor?: ProductMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMappings.
     */
    skip?: number
    distinct?: ProductMappingScalarFieldEnum | ProductMappingScalarFieldEnum[]
  }

  /**
   * ProductMapping create
   */
  export type ProductMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductMapping.
     */
    data: XOR<ProductMappingCreateInput, ProductMappingUncheckedCreateInput>
  }

  /**
   * ProductMapping createMany
   */
  export type ProductMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMappings.
     */
    data: ProductMappingCreateManyInput | ProductMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductMapping createManyAndReturn
   */
  export type ProductMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductMappings.
     */
    data: ProductMappingCreateManyInput | ProductMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMapping update
   */
  export type ProductMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductMapping.
     */
    data: XOR<ProductMappingUpdateInput, ProductMappingUncheckedUpdateInput>
    /**
     * Choose, which ProductMapping to update.
     */
    where: ProductMappingWhereUniqueInput
  }

  /**
   * ProductMapping updateMany
   */
  export type ProductMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMappings.
     */
    data: XOR<ProductMappingUpdateManyMutationInput, ProductMappingUncheckedUpdateManyInput>
    /**
     * Filter which ProductMappings to update
     */
    where?: ProductMappingWhereInput
  }

  /**
   * ProductMapping upsert
   */
  export type ProductMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductMapping to update in case it exists.
     */
    where: ProductMappingWhereUniqueInput
    /**
     * In case the ProductMapping found by the `where` argument doesn't exist, create a new ProductMapping with this data.
     */
    create: XOR<ProductMappingCreateInput, ProductMappingUncheckedCreateInput>
    /**
     * In case the ProductMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductMappingUpdateInput, ProductMappingUncheckedUpdateInput>
  }

  /**
   * ProductMapping delete
   */
  export type ProductMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    /**
     * Filter which ProductMapping to delete.
     */
    where: ProductMappingWhereUniqueInput
  }

  /**
   * ProductMapping deleteMany
   */
  export type ProductMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMappings to delete
     */
    where?: ProductMappingWhereInput
  }

  /**
   * ProductMapping.orders
   */
  export type ProductMapping$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * ProductMapping without action
   */
  export type ProductMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    meliOrderId: number | null
    totalAmount: Decimal | null
    quantity: number | null
  }

  export type OrderSumAggregateOutputType = {
    meliOrderId: bigint | null
    totalAmount: Decimal | null
    quantity: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    meliOrderId: bigint | null
    meliOrderStatus: string | null
    sellerId: string | null
    supplierId: string | null
    meliIntegrationId: string | null
    productMappingId: string | null
    buyerName: string | null
    buyerPhone: string | null
    totalAmount: Decimal | null
    quantity: number | null
    trackingNumber: string | null
    shippingLabel: string | null
    internalStatus: $Enums.OrderStatus | null
    orderDate: Date | null
    shippingDeadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    meliOrderId: bigint | null
    meliOrderStatus: string | null
    sellerId: string | null
    supplierId: string | null
    meliIntegrationId: string | null
    productMappingId: string | null
    buyerName: string | null
    buyerPhone: string | null
    totalAmount: Decimal | null
    quantity: number | null
    trackingNumber: string | null
    shippingLabel: string | null
    internalStatus: $Enums.OrderStatus | null
    orderDate: Date | null
    shippingDeadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    meliOrderId: number
    meliOrderStatus: number
    sellerId: number
    supplierId: number
    meliIntegrationId: number
    productMappingId: number
    buyerName: number
    buyerPhone: number
    shippingAddress: number
    totalAmount: number
    quantity: number
    trackingNumber: number
    shippingLabel: number
    internalStatus: number
    orderDate: number
    shippingDeadline: number
    createdAt: number
    updatedAt: number
    statusHistory: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    meliOrderId?: true
    totalAmount?: true
    quantity?: true
  }

  export type OrderSumAggregateInputType = {
    meliOrderId?: true
    totalAmount?: true
    quantity?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    meliOrderId?: true
    meliOrderStatus?: true
    sellerId?: true
    supplierId?: true
    meliIntegrationId?: true
    productMappingId?: true
    buyerName?: true
    buyerPhone?: true
    totalAmount?: true
    quantity?: true
    trackingNumber?: true
    shippingLabel?: true
    internalStatus?: true
    orderDate?: true
    shippingDeadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    meliOrderId?: true
    meliOrderStatus?: true
    sellerId?: true
    supplierId?: true
    meliIntegrationId?: true
    productMappingId?: true
    buyerName?: true
    buyerPhone?: true
    totalAmount?: true
    quantity?: true
    trackingNumber?: true
    shippingLabel?: true
    internalStatus?: true
    orderDate?: true
    shippingDeadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    meliOrderId?: true
    meliOrderStatus?: true
    sellerId?: true
    supplierId?: true
    meliIntegrationId?: true
    productMappingId?: true
    buyerName?: true
    buyerPhone?: true
    shippingAddress?: true
    totalAmount?: true
    quantity?: true
    trackingNumber?: true
    shippingLabel?: true
    internalStatus?: true
    orderDate?: true
    shippingDeadline?: true
    createdAt?: true
    updatedAt?: true
    statusHistory?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    meliOrderId: bigint
    meliOrderStatus: string
    sellerId: string
    supplierId: string | null
    meliIntegrationId: string
    productMappingId: string | null
    buyerName: string | null
    buyerPhone: string | null
    shippingAddress: JsonValue | null
    totalAmount: Decimal | null
    quantity: number
    trackingNumber: string | null
    shippingLabel: string | null
    internalStatus: $Enums.OrderStatus
    orderDate: Date
    shippingDeadline: Date | null
    createdAt: Date
    updatedAt: Date
    statusHistory: JsonValue | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meliOrderId?: boolean
    meliOrderStatus?: boolean
    sellerId?: boolean
    supplierId?: boolean
    meliIntegrationId?: boolean
    productMappingId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    shippingAddress?: boolean
    totalAmount?: boolean
    quantity?: boolean
    trackingNumber?: boolean
    shippingLabel?: boolean
    internalStatus?: boolean
    orderDate?: boolean
    shippingDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statusHistory?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    supplier?: boolean | Order$supplierArgs<ExtArgs>
    meliIntegration?: boolean | MeliIntegrationDefaultArgs<ExtArgs>
    productMapping?: boolean | Order$productMappingArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meliOrderId?: boolean
    meliOrderStatus?: boolean
    sellerId?: boolean
    supplierId?: boolean
    meliIntegrationId?: boolean
    productMappingId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    shippingAddress?: boolean
    totalAmount?: boolean
    quantity?: boolean
    trackingNumber?: boolean
    shippingLabel?: boolean
    internalStatus?: boolean
    orderDate?: boolean
    shippingDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statusHistory?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    supplier?: boolean | Order$supplierArgs<ExtArgs>
    meliIntegration?: boolean | MeliIntegrationDefaultArgs<ExtArgs>
    productMapping?: boolean | Order$productMappingArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    meliOrderId?: boolean
    meliOrderStatus?: boolean
    sellerId?: boolean
    supplierId?: boolean
    meliIntegrationId?: boolean
    productMappingId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    shippingAddress?: boolean
    totalAmount?: boolean
    quantity?: boolean
    trackingNumber?: boolean
    shippingLabel?: boolean
    internalStatus?: boolean
    orderDate?: boolean
    shippingDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statusHistory?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    supplier?: boolean | Order$supplierArgs<ExtArgs>
    meliIntegration?: boolean | MeliIntegrationDefaultArgs<ExtArgs>
    productMapping?: boolean | Order$productMappingArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    supplier?: boolean | Order$supplierArgs<ExtArgs>
    meliIntegration?: boolean | MeliIntegrationDefaultArgs<ExtArgs>
    productMapping?: boolean | Order$productMappingArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      seller: Prisma.$UserPayload<ExtArgs>
      supplier: Prisma.$UserPayload<ExtArgs> | null
      meliIntegration: Prisma.$MeliIntegrationPayload<ExtArgs>
      productMapping: Prisma.$ProductMappingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meliOrderId: bigint
      meliOrderStatus: string
      sellerId: string
      supplierId: string | null
      meliIntegrationId: string
      productMappingId: string | null
      buyerName: string | null
      buyerPhone: string | null
      shippingAddress: Prisma.JsonValue | null
      totalAmount: Prisma.Decimal | null
      quantity: number
      trackingNumber: string | null
      shippingLabel: string | null
      internalStatus: $Enums.OrderStatus
      orderDate: Date
      shippingDeadline: Date | null
      createdAt: Date
      updatedAt: Date
      statusHistory: Prisma.JsonValue | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    supplier<T extends Order$supplierArgs<ExtArgs> = {}>(args?: Subset<T, Order$supplierArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    meliIntegration<T extends MeliIntegrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeliIntegrationDefaultArgs<ExtArgs>>): Prisma__MeliIntegrationClient<$Result.GetResult<Prisma.$MeliIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    productMapping<T extends Order$productMappingArgs<ExtArgs> = {}>(args?: Subset<T, Order$productMappingArgs<ExtArgs>>): Prisma__ProductMappingClient<$Result.GetResult<Prisma.$ProductMappingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly meliOrderId: FieldRef<"Order", 'BigInt'>
    readonly meliOrderStatus: FieldRef<"Order", 'String'>
    readonly sellerId: FieldRef<"Order", 'String'>
    readonly supplierId: FieldRef<"Order", 'String'>
    readonly meliIntegrationId: FieldRef<"Order", 'String'>
    readonly productMappingId: FieldRef<"Order", 'String'>
    readonly buyerName: FieldRef<"Order", 'String'>
    readonly buyerPhone: FieldRef<"Order", 'String'>
    readonly shippingAddress: FieldRef<"Order", 'Json'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly trackingNumber: FieldRef<"Order", 'String'>
    readonly shippingLabel: FieldRef<"Order", 'String'>
    readonly internalStatus: FieldRef<"Order", 'OrderStatus'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
    readonly shippingDeadline: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly statusHistory: FieldRef<"Order", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.supplier
   */
  export type Order$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.productMapping
   */
  export type Order$productMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMapping
     */
    select?: ProductMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMappingInclude<ExtArgs> | null
    where?: ProductMappingWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    phone: 'phone',
    document: 'document',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FornecedorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    shippingType: 'shippingType',
    shippingDays: 'shippingDays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FornecedorProfileScalarFieldEnum = (typeof FornecedorProfileScalarFieldEnum)[keyof typeof FornecedorProfileScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    fornecedorProfileId: 'fornecedorProfileId',
    title: 'title',
    description: 'description',
    costPrice: 'costPrice',
    suggestedPrice: 'suggestedPrice',
    categoryId: 'categoryId',
    brand: 'brand',
    model: 'model',
    attributes: 'attributes',
    supplierSku: 'supplierSku',
    stockQuantity: 'stockQuantity',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductPhotoScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    order: 'order',
    isMain: 'isMain',
    createdAt: 'createdAt'
  };

  export type ProductPhotoScalarFieldEnum = (typeof ProductPhotoScalarFieldEnum)[keyof typeof ProductPhotoScalarFieldEnum]


  export const MeliIntegrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    meliUserId: 'meliUserId',
    meliNickname: 'meliNickname',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiresAt: 'tokenExpiresAt',
    scopes: 'scopes',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastSyncAt: 'lastSyncAt'
  };

  export type MeliIntegrationScalarFieldEnum = (typeof MeliIntegrationScalarFieldEnum)[keyof typeof MeliIntegrationScalarFieldEnum]


  export const ProductMappingScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    sellerId: 'sellerId',
    meliIntegrationId: 'meliIntegrationId',
    meliItemId: 'meliItemId',
    meliPermalink: 'meliPermalink',
    publishedPrice: 'publishedPrice',
    markupPercent: 'markupPercent',
    markupFixed: 'markupFixed',
    status: 'status',
    syncError: 'syncError',
    lastSyncAt: 'lastSyncAt',
    announcedStock: 'announcedStock',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductMappingScalarFieldEnum = (typeof ProductMappingScalarFieldEnum)[keyof typeof ProductMappingScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    meliOrderId: 'meliOrderId',
    meliOrderStatus: 'meliOrderStatus',
    sellerId: 'sellerId',
    supplierId: 'supplierId',
    meliIntegrationId: 'meliIntegrationId',
    productMappingId: 'productMappingId',
    buyerName: 'buyerName',
    buyerPhone: 'buyerPhone',
    shippingAddress: 'shippingAddress',
    totalAmount: 'totalAmount',
    quantity: 'quantity',
    trackingNumber: 'trackingNumber',
    shippingLabel: 'shippingLabel',
    internalStatus: 'internalStatus',
    orderDate: 'orderDate',
    shippingDeadline: 'shippingDeadline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    statusHistory: 'statusHistory'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MappingStatus'
   */
  export type EnumMappingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MappingStatus'>
    


  /**
   * Reference to a field of type 'MappingStatus[]'
   */
  export type ListEnumMappingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MappingStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phone?: StringNullableFilter<"User"> | string | null
    document?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    fornecedorProfile?: XOR<FornecedorProfileNullableRelationFilter, FornecedorProfileWhereInput> | null
    meliIntegrations?: MeliIntegrationListRelationFilter
    ordersAsSeller?: OrderListRelationFilter
    ordersAsSupplier?: OrderListRelationFilter
    productMappings?: ProductMappingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    document?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedorProfile?: FornecedorProfileOrderByWithRelationInput
    meliIntegrations?: MeliIntegrationOrderByRelationAggregateInput
    ordersAsSeller?: OrderOrderByRelationAggregateInput
    ordersAsSupplier?: OrderOrderByRelationAggregateInput
    productMappings?: ProductMappingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phone?: StringNullableFilter<"User"> | string | null
    document?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    fornecedorProfile?: XOR<FornecedorProfileNullableRelationFilter, FornecedorProfileWhereInput> | null
    meliIntegrations?: MeliIntegrationListRelationFilter
    ordersAsSeller?: OrderListRelationFilter
    ordersAsSupplier?: OrderListRelationFilter
    productMappings?: ProductMappingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    document?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    document?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FornecedorProfileWhereInput = {
    AND?: FornecedorProfileWhereInput | FornecedorProfileWhereInput[]
    OR?: FornecedorProfileWhereInput[]
    NOT?: FornecedorProfileWhereInput | FornecedorProfileWhereInput[]
    id?: StringFilter<"FornecedorProfile"> | string
    userId?: StringFilter<"FornecedorProfile"> | string
    companyName?: StringNullableFilter<"FornecedorProfile"> | string | null
    address?: StringNullableFilter<"FornecedorProfile"> | string | null
    city?: StringNullableFilter<"FornecedorProfile"> | string | null
    state?: StringNullableFilter<"FornecedorProfile"> | string | null
    zipCode?: StringNullableFilter<"FornecedorProfile"> | string | null
    shippingType?: StringNullableFilter<"FornecedorProfile"> | string | null
    shippingDays?: IntNullableFilter<"FornecedorProfile"> | number | null
    createdAt?: DateTimeFilter<"FornecedorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"FornecedorProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    products?: ProductListRelationFilter
  }

  export type FornecedorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    shippingType?: SortOrderInput | SortOrder
    shippingDays?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type FornecedorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FornecedorProfileWhereInput | FornecedorProfileWhereInput[]
    OR?: FornecedorProfileWhereInput[]
    NOT?: FornecedorProfileWhereInput | FornecedorProfileWhereInput[]
    companyName?: StringNullableFilter<"FornecedorProfile"> | string | null
    address?: StringNullableFilter<"FornecedorProfile"> | string | null
    city?: StringNullableFilter<"FornecedorProfile"> | string | null
    state?: StringNullableFilter<"FornecedorProfile"> | string | null
    zipCode?: StringNullableFilter<"FornecedorProfile"> | string | null
    shippingType?: StringNullableFilter<"FornecedorProfile"> | string | null
    shippingDays?: IntNullableFilter<"FornecedorProfile"> | number | null
    createdAt?: DateTimeFilter<"FornecedorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"FornecedorProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    products?: ProductListRelationFilter
  }, "id" | "userId">

  export type FornecedorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    shippingType?: SortOrderInput | SortOrder
    shippingDays?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FornecedorProfileCountOrderByAggregateInput
    _avg?: FornecedorProfileAvgOrderByAggregateInput
    _max?: FornecedorProfileMaxOrderByAggregateInput
    _min?: FornecedorProfileMinOrderByAggregateInput
    _sum?: FornecedorProfileSumOrderByAggregateInput
  }

  export type FornecedorProfileScalarWhereWithAggregatesInput = {
    AND?: FornecedorProfileScalarWhereWithAggregatesInput | FornecedorProfileScalarWhereWithAggregatesInput[]
    OR?: FornecedorProfileScalarWhereWithAggregatesInput[]
    NOT?: FornecedorProfileScalarWhereWithAggregatesInput | FornecedorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FornecedorProfile"> | string
    userId?: StringWithAggregatesFilter<"FornecedorProfile"> | string
    companyName?: StringNullableWithAggregatesFilter<"FornecedorProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"FornecedorProfile"> | string | null
    city?: StringNullableWithAggregatesFilter<"FornecedorProfile"> | string | null
    state?: StringNullableWithAggregatesFilter<"FornecedorProfile"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"FornecedorProfile"> | string | null
    shippingType?: StringNullableWithAggregatesFilter<"FornecedorProfile"> | string | null
    shippingDays?: IntNullableWithAggregatesFilter<"FornecedorProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"FornecedorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FornecedorProfile"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    fornecedorProfileId?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    costPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    suggestedPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    brand?: StringNullableFilter<"Product"> | string | null
    model?: StringNullableFilter<"Product"> | string | null
    attributes?: JsonNullableFilter<"Product">
    supplierSku?: StringFilter<"Product"> | string
    stockQuantity?: IntFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    fornecedor?: XOR<FornecedorProfileRelationFilter, FornecedorProfileWhereInput>
    photos?: ProductPhotoListRelationFilter
    productMappings?: ProductMappingListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    fornecedorProfileId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    suggestedPrice?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    supplierSku?: SortOrder
    stockQuantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedor?: FornecedorProfileOrderByWithRelationInput
    photos?: ProductPhotoOrderByRelationAggregateInput
    productMappings?: ProductMappingOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fornecedorProfileId_supplierSku?: ProductFornecedorProfileIdSupplierSkuCompoundUniqueInput
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    fornecedorProfileId?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    costPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    suggestedPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    brand?: StringNullableFilter<"Product"> | string | null
    model?: StringNullableFilter<"Product"> | string | null
    attributes?: JsonNullableFilter<"Product">
    supplierSku?: StringFilter<"Product"> | string
    stockQuantity?: IntFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    fornecedor?: XOR<FornecedorProfileRelationFilter, FornecedorProfileWhereInput>
    photos?: ProductPhotoListRelationFilter
    productMappings?: ProductMappingListRelationFilter
  }, "id" | "fornecedorProfileId_supplierSku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    fornecedorProfileId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    suggestedPrice?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    supplierSku?: SortOrder
    stockQuantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    fornecedorProfileId?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    costPrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    suggestedPrice?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    model?: StringNullableWithAggregatesFilter<"Product"> | string | null
    attributes?: JsonNullableWithAggregatesFilter<"Product">
    supplierSku?: StringWithAggregatesFilter<"Product"> | string
    stockQuantity?: IntWithAggregatesFilter<"Product"> | number
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductPhotoWhereInput = {
    AND?: ProductPhotoWhereInput | ProductPhotoWhereInput[]
    OR?: ProductPhotoWhereInput[]
    NOT?: ProductPhotoWhereInput | ProductPhotoWhereInput[]
    id?: StringFilter<"ProductPhoto"> | string
    productId?: StringFilter<"ProductPhoto"> | string
    url?: StringFilter<"ProductPhoto"> | string
    order?: IntFilter<"ProductPhoto"> | number
    isMain?: BoolFilter<"ProductPhoto"> | boolean
    createdAt?: DateTimeFilter<"ProductPhoto"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductPhotoOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isMain?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductPhotoWhereInput | ProductPhotoWhereInput[]
    OR?: ProductPhotoWhereInput[]
    NOT?: ProductPhotoWhereInput | ProductPhotoWhereInput[]
    productId?: StringFilter<"ProductPhoto"> | string
    url?: StringFilter<"ProductPhoto"> | string
    order?: IntFilter<"ProductPhoto"> | number
    isMain?: BoolFilter<"ProductPhoto"> | boolean
    createdAt?: DateTimeFilter<"ProductPhoto"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isMain?: SortOrder
    createdAt?: SortOrder
    _count?: ProductPhotoCountOrderByAggregateInput
    _avg?: ProductPhotoAvgOrderByAggregateInput
    _max?: ProductPhotoMaxOrderByAggregateInput
    _min?: ProductPhotoMinOrderByAggregateInput
    _sum?: ProductPhotoSumOrderByAggregateInput
  }

  export type ProductPhotoScalarWhereWithAggregatesInput = {
    AND?: ProductPhotoScalarWhereWithAggregatesInput | ProductPhotoScalarWhereWithAggregatesInput[]
    OR?: ProductPhotoScalarWhereWithAggregatesInput[]
    NOT?: ProductPhotoScalarWhereWithAggregatesInput | ProductPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductPhoto"> | string
    productId?: StringWithAggregatesFilter<"ProductPhoto"> | string
    url?: StringWithAggregatesFilter<"ProductPhoto"> | string
    order?: IntWithAggregatesFilter<"ProductPhoto"> | number
    isMain?: BoolWithAggregatesFilter<"ProductPhoto"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductPhoto"> | Date | string
  }

  export type MeliIntegrationWhereInput = {
    AND?: MeliIntegrationWhereInput | MeliIntegrationWhereInput[]
    OR?: MeliIntegrationWhereInput[]
    NOT?: MeliIntegrationWhereInput | MeliIntegrationWhereInput[]
    id?: StringFilter<"MeliIntegration"> | string
    userId?: StringFilter<"MeliIntegration"> | string
    meliUserId?: IntFilter<"MeliIntegration"> | number
    meliNickname?: StringFilter<"MeliIntegration"> | string
    accessToken?: StringFilter<"MeliIntegration"> | string
    refreshToken?: StringNullableFilter<"MeliIntegration"> | string | null
    tokenExpiresAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    scopes?: StringNullableListFilter<"MeliIntegration">
    isActive?: BoolFilter<"MeliIntegration"> | boolean
    createdAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    lastSyncAt?: DateTimeNullableFilter<"MeliIntegration"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    productMappings?: ProductMappingListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type MeliIntegrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    meliUserId?: SortOrder
    meliNickname?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrder
    scopes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    productMappings?: ProductMappingOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type MeliIntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_meliUserId?: MeliIntegrationUserIdMeliUserIdCompoundUniqueInput
    AND?: MeliIntegrationWhereInput | MeliIntegrationWhereInput[]
    OR?: MeliIntegrationWhereInput[]
    NOT?: MeliIntegrationWhereInput | MeliIntegrationWhereInput[]
    userId?: StringFilter<"MeliIntegration"> | string
    meliUserId?: IntFilter<"MeliIntegration"> | number
    meliNickname?: StringFilter<"MeliIntegration"> | string
    accessToken?: StringFilter<"MeliIntegration"> | string
    refreshToken?: StringNullableFilter<"MeliIntegration"> | string | null
    tokenExpiresAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    scopes?: StringNullableListFilter<"MeliIntegration">
    isActive?: BoolFilter<"MeliIntegration"> | boolean
    createdAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    lastSyncAt?: DateTimeNullableFilter<"MeliIntegration"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    productMappings?: ProductMappingListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "userId_meliUserId">

  export type MeliIntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    meliUserId?: SortOrder
    meliNickname?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrder
    scopes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    _count?: MeliIntegrationCountOrderByAggregateInput
    _avg?: MeliIntegrationAvgOrderByAggregateInput
    _max?: MeliIntegrationMaxOrderByAggregateInput
    _min?: MeliIntegrationMinOrderByAggregateInput
    _sum?: MeliIntegrationSumOrderByAggregateInput
  }

  export type MeliIntegrationScalarWhereWithAggregatesInput = {
    AND?: MeliIntegrationScalarWhereWithAggregatesInput | MeliIntegrationScalarWhereWithAggregatesInput[]
    OR?: MeliIntegrationScalarWhereWithAggregatesInput[]
    NOT?: MeliIntegrationScalarWhereWithAggregatesInput | MeliIntegrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeliIntegration"> | string
    userId?: StringWithAggregatesFilter<"MeliIntegration"> | string
    meliUserId?: IntWithAggregatesFilter<"MeliIntegration"> | number
    meliNickname?: StringWithAggregatesFilter<"MeliIntegration"> | string
    accessToken?: StringWithAggregatesFilter<"MeliIntegration"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"MeliIntegration"> | string | null
    tokenExpiresAt?: DateTimeWithAggregatesFilter<"MeliIntegration"> | Date | string
    scopes?: StringNullableListFilter<"MeliIntegration">
    isActive?: BoolWithAggregatesFilter<"MeliIntegration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MeliIntegration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MeliIntegration"> | Date | string
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"MeliIntegration"> | Date | string | null
  }

  export type ProductMappingWhereInput = {
    AND?: ProductMappingWhereInput | ProductMappingWhereInput[]
    OR?: ProductMappingWhereInput[]
    NOT?: ProductMappingWhereInput | ProductMappingWhereInput[]
    id?: StringFilter<"ProductMapping"> | string
    productId?: StringFilter<"ProductMapping"> | string
    sellerId?: StringFilter<"ProductMapping"> | string
    meliIntegrationId?: StringFilter<"ProductMapping"> | string
    meliItemId?: StringNullableFilter<"ProductMapping"> | string | null
    meliPermalink?: StringNullableFilter<"ProductMapping"> | string | null
    publishedPrice?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    markupPercent?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    markupFixed?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFilter<"ProductMapping"> | $Enums.MappingStatus
    syncError?: StringNullableFilter<"ProductMapping"> | string | null
    lastSyncAt?: DateTimeNullableFilter<"ProductMapping"> | Date | string | null
    announcedStock?: IntFilter<"ProductMapping"> | number
    createdAt?: DateTimeFilter<"ProductMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ProductMapping"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    seller?: XOR<UserRelationFilter, UserWhereInput>
    meliIntegration?: XOR<MeliIntegrationRelationFilter, MeliIntegrationWhereInput>
    orders?: OrderListRelationFilter
  }

  export type ProductMappingOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    sellerId?: SortOrder
    meliIntegrationId?: SortOrder
    meliItemId?: SortOrderInput | SortOrder
    meliPermalink?: SortOrderInput | SortOrder
    publishedPrice?: SortOrderInput | SortOrder
    markupPercent?: SortOrderInput | SortOrder
    markupFixed?: SortOrderInput | SortOrder
    status?: SortOrder
    syncError?: SortOrderInput | SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    announcedStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    meliIntegration?: MeliIntegrationOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ProductMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_sellerId?: ProductMappingProductIdSellerIdCompoundUniqueInput
    AND?: ProductMappingWhereInput | ProductMappingWhereInput[]
    OR?: ProductMappingWhereInput[]
    NOT?: ProductMappingWhereInput | ProductMappingWhereInput[]
    productId?: StringFilter<"ProductMapping"> | string
    sellerId?: StringFilter<"ProductMapping"> | string
    meliIntegrationId?: StringFilter<"ProductMapping"> | string
    meliItemId?: StringNullableFilter<"ProductMapping"> | string | null
    meliPermalink?: StringNullableFilter<"ProductMapping"> | string | null
    publishedPrice?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    markupPercent?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    markupFixed?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFilter<"ProductMapping"> | $Enums.MappingStatus
    syncError?: StringNullableFilter<"ProductMapping"> | string | null
    lastSyncAt?: DateTimeNullableFilter<"ProductMapping"> | Date | string | null
    announcedStock?: IntFilter<"ProductMapping"> | number
    createdAt?: DateTimeFilter<"ProductMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ProductMapping"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    seller?: XOR<UserRelationFilter, UserWhereInput>
    meliIntegration?: XOR<MeliIntegrationRelationFilter, MeliIntegrationWhereInput>
    orders?: OrderListRelationFilter
  }, "id" | "productId_sellerId">

  export type ProductMappingOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    sellerId?: SortOrder
    meliIntegrationId?: SortOrder
    meliItemId?: SortOrderInput | SortOrder
    meliPermalink?: SortOrderInput | SortOrder
    publishedPrice?: SortOrderInput | SortOrder
    markupPercent?: SortOrderInput | SortOrder
    markupFixed?: SortOrderInput | SortOrder
    status?: SortOrder
    syncError?: SortOrderInput | SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    announcedStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductMappingCountOrderByAggregateInput
    _avg?: ProductMappingAvgOrderByAggregateInput
    _max?: ProductMappingMaxOrderByAggregateInput
    _min?: ProductMappingMinOrderByAggregateInput
    _sum?: ProductMappingSumOrderByAggregateInput
  }

  export type ProductMappingScalarWhereWithAggregatesInput = {
    AND?: ProductMappingScalarWhereWithAggregatesInput | ProductMappingScalarWhereWithAggregatesInput[]
    OR?: ProductMappingScalarWhereWithAggregatesInput[]
    NOT?: ProductMappingScalarWhereWithAggregatesInput | ProductMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductMapping"> | string
    productId?: StringWithAggregatesFilter<"ProductMapping"> | string
    sellerId?: StringWithAggregatesFilter<"ProductMapping"> | string
    meliIntegrationId?: StringWithAggregatesFilter<"ProductMapping"> | string
    meliItemId?: StringNullableWithAggregatesFilter<"ProductMapping"> | string | null
    meliPermalink?: StringNullableWithAggregatesFilter<"ProductMapping"> | string | null
    publishedPrice?: DecimalNullableWithAggregatesFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    markupPercent?: DecimalNullableWithAggregatesFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    markupFixed?: DecimalNullableWithAggregatesFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusWithAggregatesFilter<"ProductMapping"> | $Enums.MappingStatus
    syncError?: StringNullableWithAggregatesFilter<"ProductMapping"> | string | null
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"ProductMapping"> | Date | string | null
    announcedStock?: IntWithAggregatesFilter<"ProductMapping"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductMapping"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductMapping"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    meliOrderId?: BigIntFilter<"Order"> | bigint | number
    meliOrderStatus?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
    supplierId?: StringNullableFilter<"Order"> | string | null
    meliIntegrationId?: StringFilter<"Order"> | string
    productMappingId?: StringNullableFilter<"Order"> | string | null
    buyerName?: StringNullableFilter<"Order"> | string | null
    buyerPhone?: StringNullableFilter<"Order"> | string | null
    shippingAddress?: JsonNullableFilter<"Order">
    totalAmount?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFilter<"Order"> | number
    trackingNumber?: StringNullableFilter<"Order"> | string | null
    shippingLabel?: StringNullableFilter<"Order"> | string | null
    internalStatus?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    shippingDeadline?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    statusHistory?: JsonNullableFilter<"Order">
    seller?: XOR<UserRelationFilter, UserWhereInput>
    supplier?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    meliIntegration?: XOR<MeliIntegrationRelationFilter, MeliIntegrationWhereInput>
    productMapping?: XOR<ProductMappingNullableRelationFilter, ProductMappingWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    meliOrderId?: SortOrder
    meliOrderStatus?: SortOrder
    sellerId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    meliIntegrationId?: SortOrder
    productMappingId?: SortOrderInput | SortOrder
    buyerName?: SortOrderInput | SortOrder
    buyerPhone?: SortOrderInput | SortOrder
    shippingAddress?: SortOrderInput | SortOrder
    totalAmount?: SortOrderInput | SortOrder
    quantity?: SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    shippingLabel?: SortOrderInput | SortOrder
    internalStatus?: SortOrder
    orderDate?: SortOrder
    shippingDeadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusHistory?: SortOrderInput | SortOrder
    seller?: UserOrderByWithRelationInput
    supplier?: UserOrderByWithRelationInput
    meliIntegration?: MeliIntegrationOrderByWithRelationInput
    productMapping?: ProductMappingOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    meliOrderId?: bigint | number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    meliOrderStatus?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
    supplierId?: StringNullableFilter<"Order"> | string | null
    meliIntegrationId?: StringFilter<"Order"> | string
    productMappingId?: StringNullableFilter<"Order"> | string | null
    buyerName?: StringNullableFilter<"Order"> | string | null
    buyerPhone?: StringNullableFilter<"Order"> | string | null
    shippingAddress?: JsonNullableFilter<"Order">
    totalAmount?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFilter<"Order"> | number
    trackingNumber?: StringNullableFilter<"Order"> | string | null
    shippingLabel?: StringNullableFilter<"Order"> | string | null
    internalStatus?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    shippingDeadline?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    statusHistory?: JsonNullableFilter<"Order">
    seller?: XOR<UserRelationFilter, UserWhereInput>
    supplier?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    meliIntegration?: XOR<MeliIntegrationRelationFilter, MeliIntegrationWhereInput>
    productMapping?: XOR<ProductMappingNullableRelationFilter, ProductMappingWhereInput> | null
  }, "id" | "meliOrderId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    meliOrderId?: SortOrder
    meliOrderStatus?: SortOrder
    sellerId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    meliIntegrationId?: SortOrder
    productMappingId?: SortOrderInput | SortOrder
    buyerName?: SortOrderInput | SortOrder
    buyerPhone?: SortOrderInput | SortOrder
    shippingAddress?: SortOrderInput | SortOrder
    totalAmount?: SortOrderInput | SortOrder
    quantity?: SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    shippingLabel?: SortOrderInput | SortOrder
    internalStatus?: SortOrder
    orderDate?: SortOrder
    shippingDeadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusHistory?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    meliOrderId?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    meliOrderStatus?: StringWithAggregatesFilter<"Order"> | string
    sellerId?: StringWithAggregatesFilter<"Order"> | string
    supplierId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    meliIntegrationId?: StringWithAggregatesFilter<"Order"> | string
    productMappingId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    buyerName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    buyerPhone?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingAddress?: JsonNullableWithAggregatesFilter<"Order">
    totalAmount?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntWithAggregatesFilter<"Order"> | number
    trackingNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingLabel?: StringNullableWithAggregatesFilter<"Order"> | string | null
    internalStatus?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    shippingDeadline?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    statusHistory?: JsonNullableWithAggregatesFilter<"Order">
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileCreateNestedOneWithoutUserInput
    meliIntegrations?: MeliIntegrationCreateNestedManyWithoutUserInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
    ordersAsSupplier?: OrderCreateNestedManyWithoutSupplierInput
    productMappings?: ProductMappingCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileUncheckedCreateNestedOneWithoutUserInput
    meliIntegrations?: MeliIntegrationUncheckedCreateNestedManyWithoutUserInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
    ordersAsSupplier?: OrderUncheckedCreateNestedManyWithoutSupplierInput
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUpdateOneWithoutUserNestedInput
    meliIntegrations?: MeliIntegrationUpdateManyWithoutUserNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
    ordersAsSupplier?: OrderUpdateManyWithoutSupplierNestedInput
    productMappings?: ProductMappingUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUncheckedUpdateOneWithoutUserNestedInput
    meliIntegrations?: MeliIntegrationUncheckedUpdateManyWithoutUserNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    ordersAsSupplier?: OrderUncheckedUpdateManyWithoutSupplierNestedInput
    productMappings?: ProductMappingUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorProfileCreateInput = {
    id?: string
    companyName?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    shippingType?: string | null
    shippingDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFornecedorProfileInput
    products?: ProductCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    companyName?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    shippingType?: string | null
    shippingDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingType?: NullableStringFieldUpdateOperationsInput | string | null
    shippingDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFornecedorProfileNestedInput
    products?: ProductUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingType?: NullableStringFieldUpdateOperationsInput | string | null
    shippingDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorProfileCreateManyInput = {
    id?: string
    userId: string
    companyName?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    shippingType?: string | null
    shippingDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingType?: NullableStringFieldUpdateOperationsInput | string | null
    shippingDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingType?: NullableStringFieldUpdateOperationsInput | string | null
    shippingDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorProfileCreateNestedOneWithoutProductsInput
    photos?: ProductPhotoCreateNestedManyWithoutProductInput
    productMappings?: ProductMappingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    fornecedorProfileId: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ProductPhotoUncheckedCreateNestedManyWithoutProductInput
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorProfileUpdateOneRequiredWithoutProductsNestedInput
    photos?: ProductPhotoUpdateManyWithoutProductNestedInput
    productMappings?: ProductMappingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ProductPhotoUncheckedUpdateManyWithoutProductNestedInput
    productMappings?: ProductMappingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    fornecedorProfileId: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPhotoCreateInput = {
    id?: string
    url: string
    order?: number
    isMain?: boolean
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutPhotosInput
  }

  export type ProductPhotoUncheckedCreateInput = {
    id?: string
    productId: string
    url: string
    order?: number
    isMain?: boolean
    createdAt?: Date | string
  }

  export type ProductPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type ProductPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPhotoCreateManyInput = {
    id?: string
    productId: string
    url: string
    order?: number
    isMain?: boolean
    createdAt?: Date | string
  }

  export type ProductPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeliIntegrationCreateInput = {
    id?: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
    user: UserCreateNestedOneWithoutMeliIntegrationsInput
    productMappings?: ProductMappingCreateNestedManyWithoutMeliIntegrationInput
    orders?: OrderCreateNestedManyWithoutMeliIntegrationInput
  }

  export type MeliIntegrationUncheckedCreateInput = {
    id?: string
    userId: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutMeliIntegrationInput
    orders?: OrderUncheckedCreateNestedManyWithoutMeliIntegrationInput
  }

  export type MeliIntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMeliIntegrationsNestedInput
    productMappings?: ProductMappingUpdateManyWithoutMeliIntegrationNestedInput
    orders?: OrderUpdateManyWithoutMeliIntegrationNestedInput
  }

  export type MeliIntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productMappings?: ProductMappingUncheckedUpdateManyWithoutMeliIntegrationNestedInput
    orders?: OrderUncheckedUpdateManyWithoutMeliIntegrationNestedInput
  }

  export type MeliIntegrationCreateManyInput = {
    id?: string
    userId: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
  }

  export type MeliIntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MeliIntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductMappingCreateInput = {
    id?: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductMappingsInput
    seller: UserCreateNestedOneWithoutProductMappingsInput
    meliIntegration: MeliIntegrationCreateNestedOneWithoutProductMappingsInput
    orders?: OrderCreateNestedManyWithoutProductMappingInput
  }

  export type ProductMappingUncheckedCreateInput = {
    id?: string
    productId: string
    sellerId: string
    meliIntegrationId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductMappingInput
  }

  export type ProductMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductMappingsNestedInput
    seller?: UserUpdateOneRequiredWithoutProductMappingsNestedInput
    meliIntegration?: MeliIntegrationUpdateOneRequiredWithoutProductMappingsNestedInput
    orders?: OrderUpdateManyWithoutProductMappingNestedInput
  }

  export type ProductMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductMappingNestedInput
  }

  export type ProductMappingCreateManyInput = {
    id?: string
    productId: string
    sellerId: string
    meliIntegrationId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    supplier?: UserCreateNestedOneWithoutOrdersAsSupplierInput
    meliIntegration: MeliIntegrationCreateNestedOneWithoutOrdersInput
    productMapping?: ProductMappingCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    sellerId: string
    supplierId?: string | null
    meliIntegrationId: string
    productMappingId?: string | null
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    supplier?: UserUpdateOneWithoutOrdersAsSupplierNestedInput
    meliIntegration?: MeliIntegrationUpdateOneRequiredWithoutOrdersNestedInput
    productMapping?: ProductMappingUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    productMappingId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateManyInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    sellerId: string
    supplierId?: string | null
    meliIntegrationId: string
    productMappingId?: string | null
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    productMappingId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FornecedorProfileNullableRelationFilter = {
    is?: FornecedorProfileWhereInput | null
    isNot?: FornecedorProfileWhereInput | null
  }

  export type MeliIntegrationListRelationFilter = {
    every?: MeliIntegrationWhereInput
    some?: MeliIntegrationWhereInput
    none?: MeliIntegrationWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ProductMappingListRelationFilter = {
    every?: ProductMappingWhereInput
    some?: ProductMappingWhereInput
    none?: ProductMappingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MeliIntegrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    document?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    document?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    document?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FornecedorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    shippingType?: SortOrder
    shippingDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorProfileAvgOrderByAggregateInput = {
    shippingDays?: SortOrder
  }

  export type FornecedorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    shippingType?: SortOrder
    shippingDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    shippingType?: SortOrder
    shippingDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorProfileSumOrderByAggregateInput = {
    shippingDays?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type FornecedorProfileRelationFilter = {
    is?: FornecedorProfileWhereInput
    isNot?: FornecedorProfileWhereInput
  }

  export type ProductPhotoListRelationFilter = {
    every?: ProductPhotoWhereInput
    some?: ProductPhotoWhereInput
    none?: ProductPhotoWhereInput
  }

  export type ProductPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductFornecedorProfileIdSupplierSkuCompoundUniqueInput = {
    fornecedorProfileId: string
    supplierSku: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    fornecedorProfileId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    suggestedPrice?: SortOrder
    categoryId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    attributes?: SortOrder
    supplierSku?: SortOrder
    stockQuantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    costPrice?: SortOrder
    suggestedPrice?: SortOrder
    stockQuantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    fornecedorProfileId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    suggestedPrice?: SortOrder
    categoryId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    supplierSku?: SortOrder
    stockQuantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    fornecedorProfileId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    suggestedPrice?: SortOrder
    categoryId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    supplierSku?: SortOrder
    stockQuantity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    costPrice?: SortOrder
    suggestedPrice?: SortOrder
    stockQuantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isMain?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPhotoAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProductPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isMain?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    order?: SortOrder
    isMain?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPhotoSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MeliIntegrationUserIdMeliUserIdCompoundUniqueInput = {
    userId: string
    meliUserId: number
  }

  export type MeliIntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    meliUserId?: SortOrder
    meliNickname?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    scopes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type MeliIntegrationAvgOrderByAggregateInput = {
    meliUserId?: SortOrder
  }

  export type MeliIntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    meliUserId?: SortOrder
    meliNickname?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type MeliIntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    meliUserId?: SortOrder
    meliNickname?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type MeliIntegrationSumOrderByAggregateInput = {
    meliUserId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMappingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MappingStatus | EnumMappingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MappingStatus[] | ListEnumMappingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MappingStatus[] | ListEnumMappingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMappingStatusFilter<$PrismaModel> | $Enums.MappingStatus
  }

  export type MeliIntegrationRelationFilter = {
    is?: MeliIntegrationWhereInput
    isNot?: MeliIntegrationWhereInput
  }

  export type ProductMappingProductIdSellerIdCompoundUniqueInput = {
    productId: string
    sellerId: string
  }

  export type ProductMappingCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sellerId?: SortOrder
    meliIntegrationId?: SortOrder
    meliItemId?: SortOrder
    meliPermalink?: SortOrder
    publishedPrice?: SortOrder
    markupPercent?: SortOrder
    markupFixed?: SortOrder
    status?: SortOrder
    syncError?: SortOrder
    lastSyncAt?: SortOrder
    announcedStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMappingAvgOrderByAggregateInput = {
    publishedPrice?: SortOrder
    markupPercent?: SortOrder
    markupFixed?: SortOrder
    announcedStock?: SortOrder
  }

  export type ProductMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sellerId?: SortOrder
    meliIntegrationId?: SortOrder
    meliItemId?: SortOrder
    meliPermalink?: SortOrder
    publishedPrice?: SortOrder
    markupPercent?: SortOrder
    markupFixed?: SortOrder
    status?: SortOrder
    syncError?: SortOrder
    lastSyncAt?: SortOrder
    announcedStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMappingMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sellerId?: SortOrder
    meliIntegrationId?: SortOrder
    meliItemId?: SortOrder
    meliPermalink?: SortOrder
    publishedPrice?: SortOrder
    markupPercent?: SortOrder
    markupFixed?: SortOrder
    status?: SortOrder
    syncError?: SortOrder
    lastSyncAt?: SortOrder
    announcedStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMappingSumOrderByAggregateInput = {
    publishedPrice?: SortOrder
    markupPercent?: SortOrder
    markupFixed?: SortOrder
    announcedStock?: SortOrder
  }

  export type EnumMappingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MappingStatus | EnumMappingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MappingStatus[] | ListEnumMappingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MappingStatus[] | ListEnumMappingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMappingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MappingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMappingStatusFilter<$PrismaModel>
    _max?: NestedEnumMappingStatusFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProductMappingNullableRelationFilter = {
    is?: ProductMappingWhereInput | null
    isNot?: ProductMappingWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    meliOrderId?: SortOrder
    meliOrderStatus?: SortOrder
    sellerId?: SortOrder
    supplierId?: SortOrder
    meliIntegrationId?: SortOrder
    productMappingId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    shippingAddress?: SortOrder
    totalAmount?: SortOrder
    quantity?: SortOrder
    trackingNumber?: SortOrder
    shippingLabel?: SortOrder
    internalStatus?: SortOrder
    orderDate?: SortOrder
    shippingDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusHistory?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    meliOrderId?: SortOrder
    totalAmount?: SortOrder
    quantity?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    meliOrderId?: SortOrder
    meliOrderStatus?: SortOrder
    sellerId?: SortOrder
    supplierId?: SortOrder
    meliIntegrationId?: SortOrder
    productMappingId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    totalAmount?: SortOrder
    quantity?: SortOrder
    trackingNumber?: SortOrder
    shippingLabel?: SortOrder
    internalStatus?: SortOrder
    orderDate?: SortOrder
    shippingDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    meliOrderId?: SortOrder
    meliOrderStatus?: SortOrder
    sellerId?: SortOrder
    supplierId?: SortOrder
    meliIntegrationId?: SortOrder
    productMappingId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    totalAmount?: SortOrder
    quantity?: SortOrder
    trackingNumber?: SortOrder
    shippingLabel?: SortOrder
    internalStatus?: SortOrder
    orderDate?: SortOrder
    shippingDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    meliOrderId?: SortOrder
    totalAmount?: SortOrder
    quantity?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type FornecedorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<FornecedorProfileCreateWithoutUserInput, FornecedorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FornecedorProfileCreateOrConnectWithoutUserInput
    connect?: FornecedorProfileWhereUniqueInput
  }

  export type MeliIntegrationCreateNestedManyWithoutUserInput = {
    create?: XOR<MeliIntegrationCreateWithoutUserInput, MeliIntegrationUncheckedCreateWithoutUserInput> | MeliIntegrationCreateWithoutUserInput[] | MeliIntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeliIntegrationCreateOrConnectWithoutUserInput | MeliIntegrationCreateOrConnectWithoutUserInput[]
    createMany?: MeliIntegrationCreateManyUserInputEnvelope
    connect?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutSupplierInput = {
    create?: XOR<OrderCreateWithoutSupplierInput, OrderUncheckedCreateWithoutSupplierInput> | OrderCreateWithoutSupplierInput[] | OrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSupplierInput | OrderCreateOrConnectWithoutSupplierInput[]
    createMany?: OrderCreateManySupplierInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductMappingCreateNestedManyWithoutSellerInput = {
    create?: XOR<ProductMappingCreateWithoutSellerInput, ProductMappingUncheckedCreateWithoutSellerInput> | ProductMappingCreateWithoutSellerInput[] | ProductMappingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutSellerInput | ProductMappingCreateOrConnectWithoutSellerInput[]
    createMany?: ProductMappingCreateManySellerInputEnvelope
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
  }

  export type FornecedorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FornecedorProfileCreateWithoutUserInput, FornecedorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FornecedorProfileCreateOrConnectWithoutUserInput
    connect?: FornecedorProfileWhereUniqueInput
  }

  export type MeliIntegrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeliIntegrationCreateWithoutUserInput, MeliIntegrationUncheckedCreateWithoutUserInput> | MeliIntegrationCreateWithoutUserInput[] | MeliIntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeliIntegrationCreateOrConnectWithoutUserInput | MeliIntegrationCreateOrConnectWithoutUserInput[]
    createMany?: MeliIntegrationCreateManyUserInputEnvelope
    connect?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<OrderCreateWithoutSupplierInput, OrderUncheckedCreateWithoutSupplierInput> | OrderCreateWithoutSupplierInput[] | OrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSupplierInput | OrderCreateOrConnectWithoutSupplierInput[]
    createMany?: OrderCreateManySupplierInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductMappingUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ProductMappingCreateWithoutSellerInput, ProductMappingUncheckedCreateWithoutSellerInput> | ProductMappingCreateWithoutSellerInput[] | ProductMappingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutSellerInput | ProductMappingCreateOrConnectWithoutSellerInput[]
    createMany?: ProductMappingCreateManySellerInputEnvelope
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FornecedorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<FornecedorProfileCreateWithoutUserInput, FornecedorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FornecedorProfileCreateOrConnectWithoutUserInput
    upsert?: FornecedorProfileUpsertWithoutUserInput
    disconnect?: FornecedorProfileWhereInput | boolean
    delete?: FornecedorProfileWhereInput | boolean
    connect?: FornecedorProfileWhereUniqueInput
    update?: XOR<XOR<FornecedorProfileUpdateToOneWithWhereWithoutUserInput, FornecedorProfileUpdateWithoutUserInput>, FornecedorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MeliIntegrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeliIntegrationCreateWithoutUserInput, MeliIntegrationUncheckedCreateWithoutUserInput> | MeliIntegrationCreateWithoutUserInput[] | MeliIntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeliIntegrationCreateOrConnectWithoutUserInput | MeliIntegrationCreateOrConnectWithoutUserInput[]
    upsert?: MeliIntegrationUpsertWithWhereUniqueWithoutUserInput | MeliIntegrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeliIntegrationCreateManyUserInputEnvelope
    set?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
    disconnect?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
    delete?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
    connect?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
    update?: MeliIntegrationUpdateWithWhereUniqueWithoutUserInput | MeliIntegrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeliIntegrationUpdateManyWithWhereWithoutUserInput | MeliIntegrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeliIntegrationScalarWhereInput | MeliIntegrationScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput | OrderUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput | OrderUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput | OrderUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<OrderCreateWithoutSupplierInput, OrderUncheckedCreateWithoutSupplierInput> | OrderCreateWithoutSupplierInput[] | OrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSupplierInput | OrderCreateOrConnectWithoutSupplierInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSupplierInput | OrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: OrderCreateManySupplierInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSupplierInput | OrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSupplierInput | OrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductMappingUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ProductMappingCreateWithoutSellerInput, ProductMappingUncheckedCreateWithoutSellerInput> | ProductMappingCreateWithoutSellerInput[] | ProductMappingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutSellerInput | ProductMappingCreateOrConnectWithoutSellerInput[]
    upsert?: ProductMappingUpsertWithWhereUniqueWithoutSellerInput | ProductMappingUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ProductMappingCreateManySellerInputEnvelope
    set?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    disconnect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    delete?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    update?: ProductMappingUpdateWithWhereUniqueWithoutSellerInput | ProductMappingUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ProductMappingUpdateManyWithWhereWithoutSellerInput | ProductMappingUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ProductMappingScalarWhereInput | ProductMappingScalarWhereInput[]
  }

  export type FornecedorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FornecedorProfileCreateWithoutUserInput, FornecedorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: FornecedorProfileCreateOrConnectWithoutUserInput
    upsert?: FornecedorProfileUpsertWithoutUserInput
    disconnect?: FornecedorProfileWhereInput | boolean
    delete?: FornecedorProfileWhereInput | boolean
    connect?: FornecedorProfileWhereUniqueInput
    update?: XOR<XOR<FornecedorProfileUpdateToOneWithWhereWithoutUserInput, FornecedorProfileUpdateWithoutUserInput>, FornecedorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MeliIntegrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeliIntegrationCreateWithoutUserInput, MeliIntegrationUncheckedCreateWithoutUserInput> | MeliIntegrationCreateWithoutUserInput[] | MeliIntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeliIntegrationCreateOrConnectWithoutUserInput | MeliIntegrationCreateOrConnectWithoutUserInput[]
    upsert?: MeliIntegrationUpsertWithWhereUniqueWithoutUserInput | MeliIntegrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeliIntegrationCreateManyUserInputEnvelope
    set?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
    disconnect?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
    delete?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
    connect?: MeliIntegrationWhereUniqueInput | MeliIntegrationWhereUniqueInput[]
    update?: MeliIntegrationUpdateWithWhereUniqueWithoutUserInput | MeliIntegrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeliIntegrationUpdateManyWithWhereWithoutUserInput | MeliIntegrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeliIntegrationScalarWhereInput | MeliIntegrationScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput | OrderUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput | OrderUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput | OrderUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<OrderCreateWithoutSupplierInput, OrderUncheckedCreateWithoutSupplierInput> | OrderCreateWithoutSupplierInput[] | OrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSupplierInput | OrderCreateOrConnectWithoutSupplierInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSupplierInput | OrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: OrderCreateManySupplierInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSupplierInput | OrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSupplierInput | OrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductMappingUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ProductMappingCreateWithoutSellerInput, ProductMappingUncheckedCreateWithoutSellerInput> | ProductMappingCreateWithoutSellerInput[] | ProductMappingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutSellerInput | ProductMappingCreateOrConnectWithoutSellerInput[]
    upsert?: ProductMappingUpsertWithWhereUniqueWithoutSellerInput | ProductMappingUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ProductMappingCreateManySellerInputEnvelope
    set?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    disconnect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    delete?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    update?: ProductMappingUpdateWithWhereUniqueWithoutSellerInput | ProductMappingUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ProductMappingUpdateManyWithWhereWithoutSellerInput | ProductMappingUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ProductMappingScalarWhereInput | ProductMappingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFornecedorProfileInput = {
    create?: XOR<UserCreateWithoutFornecedorProfileInput, UserUncheckedCreateWithoutFornecedorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutFornecedorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<ProductCreateWithoutFornecedorInput, ProductUncheckedCreateWithoutFornecedorInput> | ProductCreateWithoutFornecedorInput[] | ProductUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFornecedorInput | ProductCreateOrConnectWithoutFornecedorInput[]
    createMany?: ProductCreateManyFornecedorInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<ProductCreateWithoutFornecedorInput, ProductUncheckedCreateWithoutFornecedorInput> | ProductCreateWithoutFornecedorInput[] | ProductUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFornecedorInput | ProductCreateOrConnectWithoutFornecedorInput[]
    createMany?: ProductCreateManyFornecedorInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFornecedorProfileNestedInput = {
    create?: XOR<UserCreateWithoutFornecedorProfileInput, UserUncheckedCreateWithoutFornecedorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutFornecedorProfileInput
    upsert?: UserUpsertWithoutFornecedorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFornecedorProfileInput, UserUpdateWithoutFornecedorProfileInput>, UserUncheckedUpdateWithoutFornecedorProfileInput>
  }

  export type ProductUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<ProductCreateWithoutFornecedorInput, ProductUncheckedCreateWithoutFornecedorInput> | ProductCreateWithoutFornecedorInput[] | ProductUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFornecedorInput | ProductCreateOrConnectWithoutFornecedorInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFornecedorInput | ProductUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: ProductCreateManyFornecedorInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFornecedorInput | ProductUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFornecedorInput | ProductUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<ProductCreateWithoutFornecedorInput, ProductUncheckedCreateWithoutFornecedorInput> | ProductCreateWithoutFornecedorInput[] | ProductUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFornecedorInput | ProductCreateOrConnectWithoutFornecedorInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFornecedorInput | ProductUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: ProductCreateManyFornecedorInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFornecedorInput | ProductUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFornecedorInput | ProductUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type FornecedorProfileCreateNestedOneWithoutProductsInput = {
    create?: XOR<FornecedorProfileCreateWithoutProductsInput, FornecedorProfileUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FornecedorProfileCreateOrConnectWithoutProductsInput
    connect?: FornecedorProfileWhereUniqueInput
  }

  export type ProductPhotoCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPhotoCreateWithoutProductInput, ProductPhotoUncheckedCreateWithoutProductInput> | ProductPhotoCreateWithoutProductInput[] | ProductPhotoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPhotoCreateOrConnectWithoutProductInput | ProductPhotoCreateOrConnectWithoutProductInput[]
    createMany?: ProductPhotoCreateManyProductInputEnvelope
    connect?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
  }

  export type ProductMappingCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMappingCreateWithoutProductInput, ProductMappingUncheckedCreateWithoutProductInput> | ProductMappingCreateWithoutProductInput[] | ProductMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutProductInput | ProductMappingCreateOrConnectWithoutProductInput[]
    createMany?: ProductMappingCreateManyProductInputEnvelope
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
  }

  export type ProductPhotoUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPhotoCreateWithoutProductInput, ProductPhotoUncheckedCreateWithoutProductInput> | ProductPhotoCreateWithoutProductInput[] | ProductPhotoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPhotoCreateOrConnectWithoutProductInput | ProductPhotoCreateOrConnectWithoutProductInput[]
    createMany?: ProductPhotoCreateManyProductInputEnvelope
    connect?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
  }

  export type ProductMappingUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMappingCreateWithoutProductInput, ProductMappingUncheckedCreateWithoutProductInput> | ProductMappingCreateWithoutProductInput[] | ProductMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutProductInput | ProductMappingCreateOrConnectWithoutProductInput[]
    createMany?: ProductMappingCreateManyProductInputEnvelope
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type FornecedorProfileUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<FornecedorProfileCreateWithoutProductsInput, FornecedorProfileUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FornecedorProfileCreateOrConnectWithoutProductsInput
    upsert?: FornecedorProfileUpsertWithoutProductsInput
    connect?: FornecedorProfileWhereUniqueInput
    update?: XOR<XOR<FornecedorProfileUpdateToOneWithWhereWithoutProductsInput, FornecedorProfileUpdateWithoutProductsInput>, FornecedorProfileUncheckedUpdateWithoutProductsInput>
  }

  export type ProductPhotoUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPhotoCreateWithoutProductInput, ProductPhotoUncheckedCreateWithoutProductInput> | ProductPhotoCreateWithoutProductInput[] | ProductPhotoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPhotoCreateOrConnectWithoutProductInput | ProductPhotoCreateOrConnectWithoutProductInput[]
    upsert?: ProductPhotoUpsertWithWhereUniqueWithoutProductInput | ProductPhotoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPhotoCreateManyProductInputEnvelope
    set?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
    disconnect?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
    delete?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
    connect?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
    update?: ProductPhotoUpdateWithWhereUniqueWithoutProductInput | ProductPhotoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPhotoUpdateManyWithWhereWithoutProductInput | ProductPhotoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPhotoScalarWhereInput | ProductPhotoScalarWhereInput[]
  }

  export type ProductMappingUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMappingCreateWithoutProductInput, ProductMappingUncheckedCreateWithoutProductInput> | ProductMappingCreateWithoutProductInput[] | ProductMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutProductInput | ProductMappingCreateOrConnectWithoutProductInput[]
    upsert?: ProductMappingUpsertWithWhereUniqueWithoutProductInput | ProductMappingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMappingCreateManyProductInputEnvelope
    set?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    disconnect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    delete?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    update?: ProductMappingUpdateWithWhereUniqueWithoutProductInput | ProductMappingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMappingUpdateManyWithWhereWithoutProductInput | ProductMappingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMappingScalarWhereInput | ProductMappingScalarWhereInput[]
  }

  export type ProductPhotoUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPhotoCreateWithoutProductInput, ProductPhotoUncheckedCreateWithoutProductInput> | ProductPhotoCreateWithoutProductInput[] | ProductPhotoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPhotoCreateOrConnectWithoutProductInput | ProductPhotoCreateOrConnectWithoutProductInput[]
    upsert?: ProductPhotoUpsertWithWhereUniqueWithoutProductInput | ProductPhotoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPhotoCreateManyProductInputEnvelope
    set?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
    disconnect?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
    delete?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
    connect?: ProductPhotoWhereUniqueInput | ProductPhotoWhereUniqueInput[]
    update?: ProductPhotoUpdateWithWhereUniqueWithoutProductInput | ProductPhotoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPhotoUpdateManyWithWhereWithoutProductInput | ProductPhotoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPhotoScalarWhereInput | ProductPhotoScalarWhereInput[]
  }

  export type ProductMappingUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMappingCreateWithoutProductInput, ProductMappingUncheckedCreateWithoutProductInput> | ProductMappingCreateWithoutProductInput[] | ProductMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutProductInput | ProductMappingCreateOrConnectWithoutProductInput[]
    upsert?: ProductMappingUpsertWithWhereUniqueWithoutProductInput | ProductMappingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMappingCreateManyProductInputEnvelope
    set?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    disconnect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    delete?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    update?: ProductMappingUpdateWithWhereUniqueWithoutProductInput | ProductMappingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMappingUpdateManyWithWhereWithoutProductInput | ProductMappingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMappingScalarWhereInput | ProductMappingScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPhotosInput = {
    create?: XOR<ProductCreateWithoutPhotosInput, ProductUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPhotosInput
    connect?: ProductWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<ProductCreateWithoutPhotosInput, ProductUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPhotosInput
    upsert?: ProductUpsertWithoutPhotosInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPhotosInput, ProductUpdateWithoutPhotosInput>, ProductUncheckedUpdateWithoutPhotosInput>
  }

  export type MeliIntegrationCreatescopesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMeliIntegrationsInput = {
    create?: XOR<UserCreateWithoutMeliIntegrationsInput, UserUncheckedCreateWithoutMeliIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeliIntegrationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductMappingCreateNestedManyWithoutMeliIntegrationInput = {
    create?: XOR<ProductMappingCreateWithoutMeliIntegrationInput, ProductMappingUncheckedCreateWithoutMeliIntegrationInput> | ProductMappingCreateWithoutMeliIntegrationInput[] | ProductMappingUncheckedCreateWithoutMeliIntegrationInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutMeliIntegrationInput | ProductMappingCreateOrConnectWithoutMeliIntegrationInput[]
    createMany?: ProductMappingCreateManyMeliIntegrationInputEnvelope
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutMeliIntegrationInput = {
    create?: XOR<OrderCreateWithoutMeliIntegrationInput, OrderUncheckedCreateWithoutMeliIntegrationInput> | OrderCreateWithoutMeliIntegrationInput[] | OrderUncheckedCreateWithoutMeliIntegrationInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMeliIntegrationInput | OrderCreateOrConnectWithoutMeliIntegrationInput[]
    createMany?: OrderCreateManyMeliIntegrationInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductMappingUncheckedCreateNestedManyWithoutMeliIntegrationInput = {
    create?: XOR<ProductMappingCreateWithoutMeliIntegrationInput, ProductMappingUncheckedCreateWithoutMeliIntegrationInput> | ProductMappingCreateWithoutMeliIntegrationInput[] | ProductMappingUncheckedCreateWithoutMeliIntegrationInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutMeliIntegrationInput | ProductMappingCreateOrConnectWithoutMeliIntegrationInput[]
    createMany?: ProductMappingCreateManyMeliIntegrationInputEnvelope
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutMeliIntegrationInput = {
    create?: XOR<OrderCreateWithoutMeliIntegrationInput, OrderUncheckedCreateWithoutMeliIntegrationInput> | OrderCreateWithoutMeliIntegrationInput[] | OrderUncheckedCreateWithoutMeliIntegrationInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMeliIntegrationInput | OrderCreateOrConnectWithoutMeliIntegrationInput[]
    createMany?: OrderCreateManyMeliIntegrationInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MeliIntegrationUpdatescopesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMeliIntegrationsNestedInput = {
    create?: XOR<UserCreateWithoutMeliIntegrationsInput, UserUncheckedCreateWithoutMeliIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeliIntegrationsInput
    upsert?: UserUpsertWithoutMeliIntegrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeliIntegrationsInput, UserUpdateWithoutMeliIntegrationsInput>, UserUncheckedUpdateWithoutMeliIntegrationsInput>
  }

  export type ProductMappingUpdateManyWithoutMeliIntegrationNestedInput = {
    create?: XOR<ProductMappingCreateWithoutMeliIntegrationInput, ProductMappingUncheckedCreateWithoutMeliIntegrationInput> | ProductMappingCreateWithoutMeliIntegrationInput[] | ProductMappingUncheckedCreateWithoutMeliIntegrationInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutMeliIntegrationInput | ProductMappingCreateOrConnectWithoutMeliIntegrationInput[]
    upsert?: ProductMappingUpsertWithWhereUniqueWithoutMeliIntegrationInput | ProductMappingUpsertWithWhereUniqueWithoutMeliIntegrationInput[]
    createMany?: ProductMappingCreateManyMeliIntegrationInputEnvelope
    set?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    disconnect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    delete?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    update?: ProductMappingUpdateWithWhereUniqueWithoutMeliIntegrationInput | ProductMappingUpdateWithWhereUniqueWithoutMeliIntegrationInput[]
    updateMany?: ProductMappingUpdateManyWithWhereWithoutMeliIntegrationInput | ProductMappingUpdateManyWithWhereWithoutMeliIntegrationInput[]
    deleteMany?: ProductMappingScalarWhereInput | ProductMappingScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutMeliIntegrationNestedInput = {
    create?: XOR<OrderCreateWithoutMeliIntegrationInput, OrderUncheckedCreateWithoutMeliIntegrationInput> | OrderCreateWithoutMeliIntegrationInput[] | OrderUncheckedCreateWithoutMeliIntegrationInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMeliIntegrationInput | OrderCreateOrConnectWithoutMeliIntegrationInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMeliIntegrationInput | OrderUpsertWithWhereUniqueWithoutMeliIntegrationInput[]
    createMany?: OrderCreateManyMeliIntegrationInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMeliIntegrationInput | OrderUpdateWithWhereUniqueWithoutMeliIntegrationInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMeliIntegrationInput | OrderUpdateManyWithWhereWithoutMeliIntegrationInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductMappingUncheckedUpdateManyWithoutMeliIntegrationNestedInput = {
    create?: XOR<ProductMappingCreateWithoutMeliIntegrationInput, ProductMappingUncheckedCreateWithoutMeliIntegrationInput> | ProductMappingCreateWithoutMeliIntegrationInput[] | ProductMappingUncheckedCreateWithoutMeliIntegrationInput[]
    connectOrCreate?: ProductMappingCreateOrConnectWithoutMeliIntegrationInput | ProductMappingCreateOrConnectWithoutMeliIntegrationInput[]
    upsert?: ProductMappingUpsertWithWhereUniqueWithoutMeliIntegrationInput | ProductMappingUpsertWithWhereUniqueWithoutMeliIntegrationInput[]
    createMany?: ProductMappingCreateManyMeliIntegrationInputEnvelope
    set?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    disconnect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    delete?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    connect?: ProductMappingWhereUniqueInput | ProductMappingWhereUniqueInput[]
    update?: ProductMappingUpdateWithWhereUniqueWithoutMeliIntegrationInput | ProductMappingUpdateWithWhereUniqueWithoutMeliIntegrationInput[]
    updateMany?: ProductMappingUpdateManyWithWhereWithoutMeliIntegrationInput | ProductMappingUpdateManyWithWhereWithoutMeliIntegrationInput[]
    deleteMany?: ProductMappingScalarWhereInput | ProductMappingScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutMeliIntegrationNestedInput = {
    create?: XOR<OrderCreateWithoutMeliIntegrationInput, OrderUncheckedCreateWithoutMeliIntegrationInput> | OrderCreateWithoutMeliIntegrationInput[] | OrderUncheckedCreateWithoutMeliIntegrationInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMeliIntegrationInput | OrderCreateOrConnectWithoutMeliIntegrationInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMeliIntegrationInput | OrderUpsertWithWhereUniqueWithoutMeliIntegrationInput[]
    createMany?: OrderCreateManyMeliIntegrationInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMeliIntegrationInput | OrderUpdateWithWhereUniqueWithoutMeliIntegrationInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMeliIntegrationInput | OrderUpdateManyWithWhereWithoutMeliIntegrationInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductMappingsInput = {
    create?: XOR<ProductCreateWithoutProductMappingsInput, ProductUncheckedCreateWithoutProductMappingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductMappingsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProductMappingsInput = {
    create?: XOR<UserCreateWithoutProductMappingsInput, UserUncheckedCreateWithoutProductMappingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductMappingsInput
    connect?: UserWhereUniqueInput
  }

  export type MeliIntegrationCreateNestedOneWithoutProductMappingsInput = {
    create?: XOR<MeliIntegrationCreateWithoutProductMappingsInput, MeliIntegrationUncheckedCreateWithoutProductMappingsInput>
    connectOrCreate?: MeliIntegrationCreateOrConnectWithoutProductMappingsInput
    connect?: MeliIntegrationWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutProductMappingInput = {
    create?: XOR<OrderCreateWithoutProductMappingInput, OrderUncheckedCreateWithoutProductMappingInput> | OrderCreateWithoutProductMappingInput[] | OrderUncheckedCreateWithoutProductMappingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductMappingInput | OrderCreateOrConnectWithoutProductMappingInput[]
    createMany?: OrderCreateManyProductMappingInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProductMappingInput = {
    create?: XOR<OrderCreateWithoutProductMappingInput, OrderUncheckedCreateWithoutProductMappingInput> | OrderCreateWithoutProductMappingInput[] | OrderUncheckedCreateWithoutProductMappingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductMappingInput | OrderCreateOrConnectWithoutProductMappingInput[]
    createMany?: OrderCreateManyProductMappingInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumMappingStatusFieldUpdateOperationsInput = {
    set?: $Enums.MappingStatus
  }

  export type ProductUpdateOneRequiredWithoutProductMappingsNestedInput = {
    create?: XOR<ProductCreateWithoutProductMappingsInput, ProductUncheckedCreateWithoutProductMappingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductMappingsInput
    upsert?: ProductUpsertWithoutProductMappingsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductMappingsInput, ProductUpdateWithoutProductMappingsInput>, ProductUncheckedUpdateWithoutProductMappingsInput>
  }

  export type UserUpdateOneRequiredWithoutProductMappingsNestedInput = {
    create?: XOR<UserCreateWithoutProductMappingsInput, UserUncheckedCreateWithoutProductMappingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductMappingsInput
    upsert?: UserUpsertWithoutProductMappingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductMappingsInput, UserUpdateWithoutProductMappingsInput>, UserUncheckedUpdateWithoutProductMappingsInput>
  }

  export type MeliIntegrationUpdateOneRequiredWithoutProductMappingsNestedInput = {
    create?: XOR<MeliIntegrationCreateWithoutProductMappingsInput, MeliIntegrationUncheckedCreateWithoutProductMappingsInput>
    connectOrCreate?: MeliIntegrationCreateOrConnectWithoutProductMappingsInput
    upsert?: MeliIntegrationUpsertWithoutProductMappingsInput
    connect?: MeliIntegrationWhereUniqueInput
    update?: XOR<XOR<MeliIntegrationUpdateToOneWithWhereWithoutProductMappingsInput, MeliIntegrationUpdateWithoutProductMappingsInput>, MeliIntegrationUncheckedUpdateWithoutProductMappingsInput>
  }

  export type OrderUpdateManyWithoutProductMappingNestedInput = {
    create?: XOR<OrderCreateWithoutProductMappingInput, OrderUncheckedCreateWithoutProductMappingInput> | OrderCreateWithoutProductMappingInput[] | OrderUncheckedCreateWithoutProductMappingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductMappingInput | OrderCreateOrConnectWithoutProductMappingInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductMappingInput | OrderUpsertWithWhereUniqueWithoutProductMappingInput[]
    createMany?: OrderCreateManyProductMappingInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductMappingInput | OrderUpdateWithWhereUniqueWithoutProductMappingInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductMappingInput | OrderUpdateManyWithWhereWithoutProductMappingInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutProductMappingNestedInput = {
    create?: XOR<OrderCreateWithoutProductMappingInput, OrderUncheckedCreateWithoutProductMappingInput> | OrderCreateWithoutProductMappingInput[] | OrderUncheckedCreateWithoutProductMappingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductMappingInput | OrderCreateOrConnectWithoutProductMappingInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductMappingInput | OrderUpsertWithWhereUniqueWithoutProductMappingInput[]
    createMany?: OrderCreateManyProductMappingInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductMappingInput | OrderUpdateWithWhereUniqueWithoutProductMappingInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductMappingInput | OrderUpdateManyWithWhereWithoutProductMappingInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersAsSellerInput = {
    create?: XOR<UserCreateWithoutOrdersAsSellerInput, UserUncheckedCreateWithoutOrdersAsSellerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsSellerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersAsSupplierInput = {
    create?: XOR<UserCreateWithoutOrdersAsSupplierInput, UserUncheckedCreateWithoutOrdersAsSupplierInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsSupplierInput
    connect?: UserWhereUniqueInput
  }

  export type MeliIntegrationCreateNestedOneWithoutOrdersInput = {
    create?: XOR<MeliIntegrationCreateWithoutOrdersInput, MeliIntegrationUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MeliIntegrationCreateOrConnectWithoutOrdersInput
    connect?: MeliIntegrationWhereUniqueInput
  }

  export type ProductMappingCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductMappingCreateWithoutOrdersInput, ProductMappingUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductMappingCreateOrConnectWithoutOrdersInput
    connect?: ProductMappingWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput = {
    create?: XOR<UserCreateWithoutOrdersAsSellerInput, UserUncheckedCreateWithoutOrdersAsSellerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsSellerInput
    upsert?: UserUpsertWithoutOrdersAsSellerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersAsSellerInput, UserUpdateWithoutOrdersAsSellerInput>, UserUncheckedUpdateWithoutOrdersAsSellerInput>
  }

  export type UserUpdateOneWithoutOrdersAsSupplierNestedInput = {
    create?: XOR<UserCreateWithoutOrdersAsSupplierInput, UserUncheckedCreateWithoutOrdersAsSupplierInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsSupplierInput
    upsert?: UserUpsertWithoutOrdersAsSupplierInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersAsSupplierInput, UserUpdateWithoutOrdersAsSupplierInput>, UserUncheckedUpdateWithoutOrdersAsSupplierInput>
  }

  export type MeliIntegrationUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<MeliIntegrationCreateWithoutOrdersInput, MeliIntegrationUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MeliIntegrationCreateOrConnectWithoutOrdersInput
    upsert?: MeliIntegrationUpsertWithoutOrdersInput
    connect?: MeliIntegrationWhereUniqueInput
    update?: XOR<XOR<MeliIntegrationUpdateToOneWithWhereWithoutOrdersInput, MeliIntegrationUpdateWithoutOrdersInput>, MeliIntegrationUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductMappingUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ProductMappingCreateWithoutOrdersInput, ProductMappingUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductMappingCreateOrConnectWithoutOrdersInput
    upsert?: ProductMappingUpsertWithoutOrdersInput
    disconnect?: ProductMappingWhereInput | boolean
    delete?: ProductMappingWhereInput | boolean
    connect?: ProductMappingWhereUniqueInput
    update?: XOR<XOR<ProductMappingUpdateToOneWithWhereWithoutOrdersInput, ProductMappingUpdateWithoutOrdersInput>, ProductMappingUncheckedUpdateWithoutOrdersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMappingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MappingStatus | EnumMappingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MappingStatus[] | ListEnumMappingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MappingStatus[] | ListEnumMappingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMappingStatusFilter<$PrismaModel> | $Enums.MappingStatus
  }

  export type NestedEnumMappingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MappingStatus | EnumMappingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MappingStatus[] | ListEnumMappingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MappingStatus[] | ListEnumMappingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMappingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MappingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMappingStatusFilter<$PrismaModel>
    _max?: NestedEnumMappingStatusFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type FornecedorProfileCreateWithoutUserInput = {
    id?: string
    companyName?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    shippingType?: string | null
    shippingDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    companyName?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    shippingType?: string | null
    shippingDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorProfileCreateOrConnectWithoutUserInput = {
    where: FornecedorProfileWhereUniqueInput
    create: XOR<FornecedorProfileCreateWithoutUserInput, FornecedorProfileUncheckedCreateWithoutUserInput>
  }

  export type MeliIntegrationCreateWithoutUserInput = {
    id?: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
    productMappings?: ProductMappingCreateNestedManyWithoutMeliIntegrationInput
    orders?: OrderCreateNestedManyWithoutMeliIntegrationInput
  }

  export type MeliIntegrationUncheckedCreateWithoutUserInput = {
    id?: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutMeliIntegrationInput
    orders?: OrderUncheckedCreateNestedManyWithoutMeliIntegrationInput
  }

  export type MeliIntegrationCreateOrConnectWithoutUserInput = {
    where: MeliIntegrationWhereUniqueInput
    create: XOR<MeliIntegrationCreateWithoutUserInput, MeliIntegrationUncheckedCreateWithoutUserInput>
  }

  export type MeliIntegrationCreateManyUserInputEnvelope = {
    data: MeliIntegrationCreateManyUserInput | MeliIntegrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutSellerInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    supplier?: UserCreateNestedOneWithoutOrdersAsSupplierInput
    meliIntegration: MeliIntegrationCreateNestedOneWithoutOrdersInput
    productMapping?: ProductMappingCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutSellerInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    supplierId?: string | null
    meliIntegrationId: string
    productMappingId?: string | null
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateOrConnectWithoutSellerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput>
  }

  export type OrderCreateManySellerInputEnvelope = {
    data: OrderCreateManySellerInput | OrderCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutSupplierInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    meliIntegration: MeliIntegrationCreateNestedOneWithoutOrdersInput
    productMapping?: ProductMappingCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutSupplierInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    sellerId: string
    meliIntegrationId: string
    productMappingId?: string | null
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateOrConnectWithoutSupplierInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSupplierInput, OrderUncheckedCreateWithoutSupplierInput>
  }

  export type OrderCreateManySupplierInputEnvelope = {
    data: OrderCreateManySupplierInput | OrderCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type ProductMappingCreateWithoutSellerInput = {
    id?: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductMappingsInput
    meliIntegration: MeliIntegrationCreateNestedOneWithoutProductMappingsInput
    orders?: OrderCreateNestedManyWithoutProductMappingInput
  }

  export type ProductMappingUncheckedCreateWithoutSellerInput = {
    id?: string
    productId: string
    meliIntegrationId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductMappingInput
  }

  export type ProductMappingCreateOrConnectWithoutSellerInput = {
    where: ProductMappingWhereUniqueInput
    create: XOR<ProductMappingCreateWithoutSellerInput, ProductMappingUncheckedCreateWithoutSellerInput>
  }

  export type ProductMappingCreateManySellerInputEnvelope = {
    data: ProductMappingCreateManySellerInput | ProductMappingCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type FornecedorProfileUpsertWithoutUserInput = {
    update: XOR<FornecedorProfileUpdateWithoutUserInput, FornecedorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<FornecedorProfileCreateWithoutUserInput, FornecedorProfileUncheckedCreateWithoutUserInput>
    where?: FornecedorProfileWhereInput
  }

  export type FornecedorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: FornecedorProfileWhereInput
    data: XOR<FornecedorProfileUpdateWithoutUserInput, FornecedorProfileUncheckedUpdateWithoutUserInput>
  }

  export type FornecedorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingType?: NullableStringFieldUpdateOperationsInput | string | null
    shippingDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingType?: NullableStringFieldUpdateOperationsInput | string | null
    shippingDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type MeliIntegrationUpsertWithWhereUniqueWithoutUserInput = {
    where: MeliIntegrationWhereUniqueInput
    update: XOR<MeliIntegrationUpdateWithoutUserInput, MeliIntegrationUncheckedUpdateWithoutUserInput>
    create: XOR<MeliIntegrationCreateWithoutUserInput, MeliIntegrationUncheckedCreateWithoutUserInput>
  }

  export type MeliIntegrationUpdateWithWhereUniqueWithoutUserInput = {
    where: MeliIntegrationWhereUniqueInput
    data: XOR<MeliIntegrationUpdateWithoutUserInput, MeliIntegrationUncheckedUpdateWithoutUserInput>
  }

  export type MeliIntegrationUpdateManyWithWhereWithoutUserInput = {
    where: MeliIntegrationScalarWhereInput
    data: XOR<MeliIntegrationUpdateManyMutationInput, MeliIntegrationUncheckedUpdateManyWithoutUserInput>
  }

  export type MeliIntegrationScalarWhereInput = {
    AND?: MeliIntegrationScalarWhereInput | MeliIntegrationScalarWhereInput[]
    OR?: MeliIntegrationScalarWhereInput[]
    NOT?: MeliIntegrationScalarWhereInput | MeliIntegrationScalarWhereInput[]
    id?: StringFilter<"MeliIntegration"> | string
    userId?: StringFilter<"MeliIntegration"> | string
    meliUserId?: IntFilter<"MeliIntegration"> | number
    meliNickname?: StringFilter<"MeliIntegration"> | string
    accessToken?: StringFilter<"MeliIntegration"> | string
    refreshToken?: StringNullableFilter<"MeliIntegration"> | string | null
    tokenExpiresAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    scopes?: StringNullableListFilter<"MeliIntegration">
    isActive?: BoolFilter<"MeliIntegration"> | boolean
    createdAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"MeliIntegration"> | Date | string
    lastSyncAt?: DateTimeNullableFilter<"MeliIntegration"> | Date | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutSellerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutSellerInput, OrderUncheckedUpdateWithoutSellerInput>
    create: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutSellerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutSellerInput, OrderUncheckedUpdateWithoutSellerInput>
  }

  export type OrderUpdateManyWithWhereWithoutSellerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutSellerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    meliOrderId?: BigIntFilter<"Order"> | bigint | number
    meliOrderStatus?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
    supplierId?: StringNullableFilter<"Order"> | string | null
    meliIntegrationId?: StringFilter<"Order"> | string
    productMappingId?: StringNullableFilter<"Order"> | string | null
    buyerName?: StringNullableFilter<"Order"> | string | null
    buyerPhone?: StringNullableFilter<"Order"> | string | null
    shippingAddress?: JsonNullableFilter<"Order">
    totalAmount?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFilter<"Order"> | number
    trackingNumber?: StringNullableFilter<"Order"> | string | null
    shippingLabel?: StringNullableFilter<"Order"> | string | null
    internalStatus?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    shippingDeadline?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    statusHistory?: JsonNullableFilter<"Order">
  }

  export type OrderUpsertWithWhereUniqueWithoutSupplierInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutSupplierInput, OrderUncheckedUpdateWithoutSupplierInput>
    create: XOR<OrderCreateWithoutSupplierInput, OrderUncheckedCreateWithoutSupplierInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutSupplierInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutSupplierInput, OrderUncheckedUpdateWithoutSupplierInput>
  }

  export type OrderUpdateManyWithWhereWithoutSupplierInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ProductMappingUpsertWithWhereUniqueWithoutSellerInput = {
    where: ProductMappingWhereUniqueInput
    update: XOR<ProductMappingUpdateWithoutSellerInput, ProductMappingUncheckedUpdateWithoutSellerInput>
    create: XOR<ProductMappingCreateWithoutSellerInput, ProductMappingUncheckedCreateWithoutSellerInput>
  }

  export type ProductMappingUpdateWithWhereUniqueWithoutSellerInput = {
    where: ProductMappingWhereUniqueInput
    data: XOR<ProductMappingUpdateWithoutSellerInput, ProductMappingUncheckedUpdateWithoutSellerInput>
  }

  export type ProductMappingUpdateManyWithWhereWithoutSellerInput = {
    where: ProductMappingScalarWhereInput
    data: XOR<ProductMappingUpdateManyMutationInput, ProductMappingUncheckedUpdateManyWithoutSellerInput>
  }

  export type ProductMappingScalarWhereInput = {
    AND?: ProductMappingScalarWhereInput | ProductMappingScalarWhereInput[]
    OR?: ProductMappingScalarWhereInput[]
    NOT?: ProductMappingScalarWhereInput | ProductMappingScalarWhereInput[]
    id?: StringFilter<"ProductMapping"> | string
    productId?: StringFilter<"ProductMapping"> | string
    sellerId?: StringFilter<"ProductMapping"> | string
    meliIntegrationId?: StringFilter<"ProductMapping"> | string
    meliItemId?: StringNullableFilter<"ProductMapping"> | string | null
    meliPermalink?: StringNullableFilter<"ProductMapping"> | string | null
    publishedPrice?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    markupPercent?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    markupFixed?: DecimalNullableFilter<"ProductMapping"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFilter<"ProductMapping"> | $Enums.MappingStatus
    syncError?: StringNullableFilter<"ProductMapping"> | string | null
    lastSyncAt?: DateTimeNullableFilter<"ProductMapping"> | Date | string | null
    announcedStock?: IntFilter<"ProductMapping"> | number
    createdAt?: DateTimeFilter<"ProductMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ProductMapping"> | Date | string
  }

  export type UserCreateWithoutFornecedorProfileInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meliIntegrations?: MeliIntegrationCreateNestedManyWithoutUserInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
    ordersAsSupplier?: OrderCreateNestedManyWithoutSupplierInput
    productMappings?: ProductMappingCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutFornecedorProfileInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meliIntegrations?: MeliIntegrationUncheckedCreateNestedManyWithoutUserInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
    ordersAsSupplier?: OrderUncheckedCreateNestedManyWithoutSupplierInput
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutFornecedorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFornecedorProfileInput, UserUncheckedCreateWithoutFornecedorProfileInput>
  }

  export type ProductCreateWithoutFornecedorInput = {
    id?: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ProductPhotoCreateNestedManyWithoutProductInput
    productMappings?: ProductMappingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFornecedorInput = {
    id?: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ProductPhotoUncheckedCreateNestedManyWithoutProductInput
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFornecedorInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFornecedorInput, ProductUncheckedCreateWithoutFornecedorInput>
  }

  export type ProductCreateManyFornecedorInputEnvelope = {
    data: ProductCreateManyFornecedorInput | ProductCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFornecedorProfileInput = {
    update: XOR<UserUpdateWithoutFornecedorProfileInput, UserUncheckedUpdateWithoutFornecedorProfileInput>
    create: XOR<UserCreateWithoutFornecedorProfileInput, UserUncheckedCreateWithoutFornecedorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFornecedorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFornecedorProfileInput, UserUncheckedUpdateWithoutFornecedorProfileInput>
  }

  export type UserUpdateWithoutFornecedorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meliIntegrations?: MeliIntegrationUpdateManyWithoutUserNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
    ordersAsSupplier?: OrderUpdateManyWithoutSupplierNestedInput
    productMappings?: ProductMappingUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutFornecedorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meliIntegrations?: MeliIntegrationUncheckedUpdateManyWithoutUserNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    ordersAsSupplier?: OrderUncheckedUpdateManyWithoutSupplierNestedInput
    productMappings?: ProductMappingUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutFornecedorInput, ProductUncheckedUpdateWithoutFornecedorInput>
    create: XOR<ProductCreateWithoutFornecedorInput, ProductUncheckedCreateWithoutFornecedorInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutFornecedorInput, ProductUncheckedUpdateWithoutFornecedorInput>
  }

  export type ProductUpdateManyWithWhereWithoutFornecedorInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    fornecedorProfileId?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    costPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    suggestedPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    brand?: StringNullableFilter<"Product"> | string | null
    model?: StringNullableFilter<"Product"> | string | null
    attributes?: JsonNullableFilter<"Product">
    supplierSku?: StringFilter<"Product"> | string
    stockQuantity?: IntFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type FornecedorProfileCreateWithoutProductsInput = {
    id?: string
    companyName?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    shippingType?: string | null
    shippingDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFornecedorProfileInput
  }

  export type FornecedorProfileUncheckedCreateWithoutProductsInput = {
    id?: string
    userId: string
    companyName?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    shippingType?: string | null
    shippingDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorProfileCreateOrConnectWithoutProductsInput = {
    where: FornecedorProfileWhereUniqueInput
    create: XOR<FornecedorProfileCreateWithoutProductsInput, FornecedorProfileUncheckedCreateWithoutProductsInput>
  }

  export type ProductPhotoCreateWithoutProductInput = {
    id?: string
    url: string
    order?: number
    isMain?: boolean
    createdAt?: Date | string
  }

  export type ProductPhotoUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    order?: number
    isMain?: boolean
    createdAt?: Date | string
  }

  export type ProductPhotoCreateOrConnectWithoutProductInput = {
    where: ProductPhotoWhereUniqueInput
    create: XOR<ProductPhotoCreateWithoutProductInput, ProductPhotoUncheckedCreateWithoutProductInput>
  }

  export type ProductPhotoCreateManyProductInputEnvelope = {
    data: ProductPhotoCreateManyProductInput | ProductPhotoCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductMappingCreateWithoutProductInput = {
    id?: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: UserCreateNestedOneWithoutProductMappingsInput
    meliIntegration: MeliIntegrationCreateNestedOneWithoutProductMappingsInput
    orders?: OrderCreateNestedManyWithoutProductMappingInput
  }

  export type ProductMappingUncheckedCreateWithoutProductInput = {
    id?: string
    sellerId: string
    meliIntegrationId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductMappingInput
  }

  export type ProductMappingCreateOrConnectWithoutProductInput = {
    where: ProductMappingWhereUniqueInput
    create: XOR<ProductMappingCreateWithoutProductInput, ProductMappingUncheckedCreateWithoutProductInput>
  }

  export type ProductMappingCreateManyProductInputEnvelope = {
    data: ProductMappingCreateManyProductInput | ProductMappingCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FornecedorProfileUpsertWithoutProductsInput = {
    update: XOR<FornecedorProfileUpdateWithoutProductsInput, FornecedorProfileUncheckedUpdateWithoutProductsInput>
    create: XOR<FornecedorProfileCreateWithoutProductsInput, FornecedorProfileUncheckedCreateWithoutProductsInput>
    where?: FornecedorProfileWhereInput
  }

  export type FornecedorProfileUpdateToOneWithWhereWithoutProductsInput = {
    where?: FornecedorProfileWhereInput
    data: XOR<FornecedorProfileUpdateWithoutProductsInput, FornecedorProfileUncheckedUpdateWithoutProductsInput>
  }

  export type FornecedorProfileUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingType?: NullableStringFieldUpdateOperationsInput | string | null
    shippingDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFornecedorProfileNestedInput
  }

  export type FornecedorProfileUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingType?: NullableStringFieldUpdateOperationsInput | string | null
    shippingDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPhotoUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPhotoWhereUniqueInput
    update: XOR<ProductPhotoUpdateWithoutProductInput, ProductPhotoUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPhotoCreateWithoutProductInput, ProductPhotoUncheckedCreateWithoutProductInput>
  }

  export type ProductPhotoUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPhotoWhereUniqueInput
    data: XOR<ProductPhotoUpdateWithoutProductInput, ProductPhotoUncheckedUpdateWithoutProductInput>
  }

  export type ProductPhotoUpdateManyWithWhereWithoutProductInput = {
    where: ProductPhotoScalarWhereInput
    data: XOR<ProductPhotoUpdateManyMutationInput, ProductPhotoUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPhotoScalarWhereInput = {
    AND?: ProductPhotoScalarWhereInput | ProductPhotoScalarWhereInput[]
    OR?: ProductPhotoScalarWhereInput[]
    NOT?: ProductPhotoScalarWhereInput | ProductPhotoScalarWhereInput[]
    id?: StringFilter<"ProductPhoto"> | string
    productId?: StringFilter<"ProductPhoto"> | string
    url?: StringFilter<"ProductPhoto"> | string
    order?: IntFilter<"ProductPhoto"> | number
    isMain?: BoolFilter<"ProductPhoto"> | boolean
    createdAt?: DateTimeFilter<"ProductPhoto"> | Date | string
  }

  export type ProductMappingUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductMappingWhereUniqueInput
    update: XOR<ProductMappingUpdateWithoutProductInput, ProductMappingUncheckedUpdateWithoutProductInput>
    create: XOR<ProductMappingCreateWithoutProductInput, ProductMappingUncheckedCreateWithoutProductInput>
  }

  export type ProductMappingUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductMappingWhereUniqueInput
    data: XOR<ProductMappingUpdateWithoutProductInput, ProductMappingUncheckedUpdateWithoutProductInput>
  }

  export type ProductMappingUpdateManyWithWhereWithoutProductInput = {
    where: ProductMappingScalarWhereInput
    data: XOR<ProductMappingUpdateManyMutationInput, ProductMappingUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutPhotosInput = {
    id?: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorProfileCreateNestedOneWithoutProductsInput
    productMappings?: ProductMappingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPhotosInput = {
    id?: string
    fornecedorProfileId: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPhotosInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPhotosInput, ProductUncheckedCreateWithoutPhotosInput>
  }

  export type ProductUpsertWithoutPhotosInput = {
    update: XOR<ProductUpdateWithoutPhotosInput, ProductUncheckedUpdateWithoutPhotosInput>
    create: XOR<ProductCreateWithoutPhotosInput, ProductUncheckedCreateWithoutPhotosInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPhotosInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPhotosInput, ProductUncheckedUpdateWithoutPhotosInput>
  }

  export type ProductUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorProfileUpdateOneRequiredWithoutProductsNestedInput
    productMappings?: ProductMappingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productMappings?: ProductMappingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutMeliIntegrationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileCreateNestedOneWithoutUserInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
    ordersAsSupplier?: OrderCreateNestedManyWithoutSupplierInput
    productMappings?: ProductMappingCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutMeliIntegrationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileUncheckedCreateNestedOneWithoutUserInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
    ordersAsSupplier?: OrderUncheckedCreateNestedManyWithoutSupplierInput
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutMeliIntegrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeliIntegrationsInput, UserUncheckedCreateWithoutMeliIntegrationsInput>
  }

  export type ProductMappingCreateWithoutMeliIntegrationInput = {
    id?: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductMappingsInput
    seller: UserCreateNestedOneWithoutProductMappingsInput
    orders?: OrderCreateNestedManyWithoutProductMappingInput
  }

  export type ProductMappingUncheckedCreateWithoutMeliIntegrationInput = {
    id?: string
    productId: string
    sellerId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductMappingInput
  }

  export type ProductMappingCreateOrConnectWithoutMeliIntegrationInput = {
    where: ProductMappingWhereUniqueInput
    create: XOR<ProductMappingCreateWithoutMeliIntegrationInput, ProductMappingUncheckedCreateWithoutMeliIntegrationInput>
  }

  export type ProductMappingCreateManyMeliIntegrationInputEnvelope = {
    data: ProductMappingCreateManyMeliIntegrationInput | ProductMappingCreateManyMeliIntegrationInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutMeliIntegrationInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    supplier?: UserCreateNestedOneWithoutOrdersAsSupplierInput
    productMapping?: ProductMappingCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutMeliIntegrationInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    sellerId: string
    supplierId?: string | null
    productMappingId?: string | null
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateOrConnectWithoutMeliIntegrationInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutMeliIntegrationInput, OrderUncheckedCreateWithoutMeliIntegrationInput>
  }

  export type OrderCreateManyMeliIntegrationInputEnvelope = {
    data: OrderCreateManyMeliIntegrationInput | OrderCreateManyMeliIntegrationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMeliIntegrationsInput = {
    update: XOR<UserUpdateWithoutMeliIntegrationsInput, UserUncheckedUpdateWithoutMeliIntegrationsInput>
    create: XOR<UserCreateWithoutMeliIntegrationsInput, UserUncheckedCreateWithoutMeliIntegrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeliIntegrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeliIntegrationsInput, UserUncheckedUpdateWithoutMeliIntegrationsInput>
  }

  export type UserUpdateWithoutMeliIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUpdateOneWithoutUserNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
    ordersAsSupplier?: OrderUpdateManyWithoutSupplierNestedInput
    productMappings?: ProductMappingUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutMeliIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUncheckedUpdateOneWithoutUserNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    ordersAsSupplier?: OrderUncheckedUpdateManyWithoutSupplierNestedInput
    productMappings?: ProductMappingUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type ProductMappingUpsertWithWhereUniqueWithoutMeliIntegrationInput = {
    where: ProductMappingWhereUniqueInput
    update: XOR<ProductMappingUpdateWithoutMeliIntegrationInput, ProductMappingUncheckedUpdateWithoutMeliIntegrationInput>
    create: XOR<ProductMappingCreateWithoutMeliIntegrationInput, ProductMappingUncheckedCreateWithoutMeliIntegrationInput>
  }

  export type ProductMappingUpdateWithWhereUniqueWithoutMeliIntegrationInput = {
    where: ProductMappingWhereUniqueInput
    data: XOR<ProductMappingUpdateWithoutMeliIntegrationInput, ProductMappingUncheckedUpdateWithoutMeliIntegrationInput>
  }

  export type ProductMappingUpdateManyWithWhereWithoutMeliIntegrationInput = {
    where: ProductMappingScalarWhereInput
    data: XOR<ProductMappingUpdateManyMutationInput, ProductMappingUncheckedUpdateManyWithoutMeliIntegrationInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutMeliIntegrationInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutMeliIntegrationInput, OrderUncheckedUpdateWithoutMeliIntegrationInput>
    create: XOR<OrderCreateWithoutMeliIntegrationInput, OrderUncheckedCreateWithoutMeliIntegrationInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutMeliIntegrationInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutMeliIntegrationInput, OrderUncheckedUpdateWithoutMeliIntegrationInput>
  }

  export type OrderUpdateManyWithWhereWithoutMeliIntegrationInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutMeliIntegrationInput>
  }

  export type ProductCreateWithoutProductMappingsInput = {
    id?: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorProfileCreateNestedOneWithoutProductsInput
    photos?: ProductPhotoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductMappingsInput = {
    id?: string
    fornecedorProfileId: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: ProductPhotoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductMappingsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductMappingsInput, ProductUncheckedCreateWithoutProductMappingsInput>
  }

  export type UserCreateWithoutProductMappingsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileCreateNestedOneWithoutUserInput
    meliIntegrations?: MeliIntegrationCreateNestedManyWithoutUserInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
    ordersAsSupplier?: OrderCreateNestedManyWithoutSupplierInput
  }

  export type UserUncheckedCreateWithoutProductMappingsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileUncheckedCreateNestedOneWithoutUserInput
    meliIntegrations?: MeliIntegrationUncheckedCreateNestedManyWithoutUserInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
    ordersAsSupplier?: OrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type UserCreateOrConnectWithoutProductMappingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductMappingsInput, UserUncheckedCreateWithoutProductMappingsInput>
  }

  export type MeliIntegrationCreateWithoutProductMappingsInput = {
    id?: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
    user: UserCreateNestedOneWithoutMeliIntegrationsInput
    orders?: OrderCreateNestedManyWithoutMeliIntegrationInput
  }

  export type MeliIntegrationUncheckedCreateWithoutProductMappingsInput = {
    id?: string
    userId: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
    orders?: OrderUncheckedCreateNestedManyWithoutMeliIntegrationInput
  }

  export type MeliIntegrationCreateOrConnectWithoutProductMappingsInput = {
    where: MeliIntegrationWhereUniqueInput
    create: XOR<MeliIntegrationCreateWithoutProductMappingsInput, MeliIntegrationUncheckedCreateWithoutProductMappingsInput>
  }

  export type OrderCreateWithoutProductMappingInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    supplier?: UserCreateNestedOneWithoutOrdersAsSupplierInput
    meliIntegration: MeliIntegrationCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutProductMappingInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    sellerId: string
    supplierId?: string | null
    meliIntegrationId: string
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateOrConnectWithoutProductMappingInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductMappingInput, OrderUncheckedCreateWithoutProductMappingInput>
  }

  export type OrderCreateManyProductMappingInputEnvelope = {
    data: OrderCreateManyProductMappingInput | OrderCreateManyProductMappingInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutProductMappingsInput = {
    update: XOR<ProductUpdateWithoutProductMappingsInput, ProductUncheckedUpdateWithoutProductMappingsInput>
    create: XOR<ProductCreateWithoutProductMappingsInput, ProductUncheckedCreateWithoutProductMappingsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductMappingsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductMappingsInput, ProductUncheckedUpdateWithoutProductMappingsInput>
  }

  export type ProductUpdateWithoutProductMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorProfileUpdateOneRequiredWithoutProductsNestedInput
    photos?: ProductPhotoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorProfileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ProductPhotoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutProductMappingsInput = {
    update: XOR<UserUpdateWithoutProductMappingsInput, UserUncheckedUpdateWithoutProductMappingsInput>
    create: XOR<UserCreateWithoutProductMappingsInput, UserUncheckedCreateWithoutProductMappingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductMappingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductMappingsInput, UserUncheckedUpdateWithoutProductMappingsInput>
  }

  export type UserUpdateWithoutProductMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUpdateOneWithoutUserNestedInput
    meliIntegrations?: MeliIntegrationUpdateManyWithoutUserNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
    ordersAsSupplier?: OrderUpdateManyWithoutSupplierNestedInput
  }

  export type UserUncheckedUpdateWithoutProductMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUncheckedUpdateOneWithoutUserNestedInput
    meliIntegrations?: MeliIntegrationUncheckedUpdateManyWithoutUserNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    ordersAsSupplier?: OrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type MeliIntegrationUpsertWithoutProductMappingsInput = {
    update: XOR<MeliIntegrationUpdateWithoutProductMappingsInput, MeliIntegrationUncheckedUpdateWithoutProductMappingsInput>
    create: XOR<MeliIntegrationCreateWithoutProductMappingsInput, MeliIntegrationUncheckedCreateWithoutProductMappingsInput>
    where?: MeliIntegrationWhereInput
  }

  export type MeliIntegrationUpdateToOneWithWhereWithoutProductMappingsInput = {
    where?: MeliIntegrationWhereInput
    data: XOR<MeliIntegrationUpdateWithoutProductMappingsInput, MeliIntegrationUncheckedUpdateWithoutProductMappingsInput>
  }

  export type MeliIntegrationUpdateWithoutProductMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMeliIntegrationsNestedInput
    orders?: OrderUpdateManyWithoutMeliIntegrationNestedInput
  }

  export type MeliIntegrationUncheckedUpdateWithoutProductMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrderUncheckedUpdateManyWithoutMeliIntegrationNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutProductMappingInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProductMappingInput, OrderUncheckedUpdateWithoutProductMappingInput>
    create: XOR<OrderCreateWithoutProductMappingInput, OrderUncheckedCreateWithoutProductMappingInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProductMappingInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProductMappingInput, OrderUncheckedUpdateWithoutProductMappingInput>
  }

  export type OrderUpdateManyWithWhereWithoutProductMappingInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProductMappingInput>
  }

  export type UserCreateWithoutOrdersAsSellerInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileCreateNestedOneWithoutUserInput
    meliIntegrations?: MeliIntegrationCreateNestedManyWithoutUserInput
    ordersAsSupplier?: OrderCreateNestedManyWithoutSupplierInput
    productMappings?: ProductMappingCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutOrdersAsSellerInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileUncheckedCreateNestedOneWithoutUserInput
    meliIntegrations?: MeliIntegrationUncheckedCreateNestedManyWithoutUserInput
    ordersAsSupplier?: OrderUncheckedCreateNestedManyWithoutSupplierInput
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutOrdersAsSellerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersAsSellerInput, UserUncheckedCreateWithoutOrdersAsSellerInput>
  }

  export type UserCreateWithoutOrdersAsSupplierInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileCreateNestedOneWithoutUserInput
    meliIntegrations?: MeliIntegrationCreateNestedManyWithoutUserInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
    productMappings?: ProductMappingCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutOrdersAsSupplierInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.UserRole
    phone?: string | null
    document?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedorProfile?: FornecedorProfileUncheckedCreateNestedOneWithoutUserInput
    meliIntegrations?: MeliIntegrationUncheckedCreateNestedManyWithoutUserInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutOrdersAsSupplierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersAsSupplierInput, UserUncheckedCreateWithoutOrdersAsSupplierInput>
  }

  export type MeliIntegrationCreateWithoutOrdersInput = {
    id?: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
    user: UserCreateNestedOneWithoutMeliIntegrationsInput
    productMappings?: ProductMappingCreateNestedManyWithoutMeliIntegrationInput
  }

  export type MeliIntegrationUncheckedCreateWithoutOrdersInput = {
    id?: string
    userId: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
    productMappings?: ProductMappingUncheckedCreateNestedManyWithoutMeliIntegrationInput
  }

  export type MeliIntegrationCreateOrConnectWithoutOrdersInput = {
    where: MeliIntegrationWhereUniqueInput
    create: XOR<MeliIntegrationCreateWithoutOrdersInput, MeliIntegrationUncheckedCreateWithoutOrdersInput>
  }

  export type ProductMappingCreateWithoutOrdersInput = {
    id?: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductMappingsInput
    seller: UserCreateNestedOneWithoutProductMappingsInput
    meliIntegration: MeliIntegrationCreateNestedOneWithoutProductMappingsInput
  }

  export type ProductMappingUncheckedCreateWithoutOrdersInput = {
    id?: string
    productId: string
    sellerId: string
    meliIntegrationId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMappingCreateOrConnectWithoutOrdersInput = {
    where: ProductMappingWhereUniqueInput
    create: XOR<ProductMappingCreateWithoutOrdersInput, ProductMappingUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersAsSellerInput = {
    update: XOR<UserUpdateWithoutOrdersAsSellerInput, UserUncheckedUpdateWithoutOrdersAsSellerInput>
    create: XOR<UserCreateWithoutOrdersAsSellerInput, UserUncheckedCreateWithoutOrdersAsSellerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersAsSellerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersAsSellerInput, UserUncheckedUpdateWithoutOrdersAsSellerInput>
  }

  export type UserUpdateWithoutOrdersAsSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUpdateOneWithoutUserNestedInput
    meliIntegrations?: MeliIntegrationUpdateManyWithoutUserNestedInput
    ordersAsSupplier?: OrderUpdateManyWithoutSupplierNestedInput
    productMappings?: ProductMappingUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersAsSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUncheckedUpdateOneWithoutUserNestedInput
    meliIntegrations?: MeliIntegrationUncheckedUpdateManyWithoutUserNestedInput
    ordersAsSupplier?: OrderUncheckedUpdateManyWithoutSupplierNestedInput
    productMappings?: ProductMappingUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserUpsertWithoutOrdersAsSupplierInput = {
    update: XOR<UserUpdateWithoutOrdersAsSupplierInput, UserUncheckedUpdateWithoutOrdersAsSupplierInput>
    create: XOR<UserCreateWithoutOrdersAsSupplierInput, UserUncheckedCreateWithoutOrdersAsSupplierInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersAsSupplierInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersAsSupplierInput, UserUncheckedUpdateWithoutOrdersAsSupplierInput>
  }

  export type UserUpdateWithoutOrdersAsSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUpdateOneWithoutUserNestedInput
    meliIntegrations?: MeliIntegrationUpdateManyWithoutUserNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
    productMappings?: ProductMappingUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersAsSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedorProfile?: FornecedorProfileUncheckedUpdateOneWithoutUserNestedInput
    meliIntegrations?: MeliIntegrationUncheckedUpdateManyWithoutUserNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    productMappings?: ProductMappingUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type MeliIntegrationUpsertWithoutOrdersInput = {
    update: XOR<MeliIntegrationUpdateWithoutOrdersInput, MeliIntegrationUncheckedUpdateWithoutOrdersInput>
    create: XOR<MeliIntegrationCreateWithoutOrdersInput, MeliIntegrationUncheckedCreateWithoutOrdersInput>
    where?: MeliIntegrationWhereInput
  }

  export type MeliIntegrationUpdateToOneWithWhereWithoutOrdersInput = {
    where?: MeliIntegrationWhereInput
    data: XOR<MeliIntegrationUpdateWithoutOrdersInput, MeliIntegrationUncheckedUpdateWithoutOrdersInput>
  }

  export type MeliIntegrationUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMeliIntegrationsNestedInput
    productMappings?: ProductMappingUpdateManyWithoutMeliIntegrationNestedInput
  }

  export type MeliIntegrationUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productMappings?: ProductMappingUncheckedUpdateManyWithoutMeliIntegrationNestedInput
  }

  export type ProductMappingUpsertWithoutOrdersInput = {
    update: XOR<ProductMappingUpdateWithoutOrdersInput, ProductMappingUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductMappingCreateWithoutOrdersInput, ProductMappingUncheckedCreateWithoutOrdersInput>
    where?: ProductMappingWhereInput
  }

  export type ProductMappingUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductMappingWhereInput
    data: XOR<ProductMappingUpdateWithoutOrdersInput, ProductMappingUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductMappingUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductMappingsNestedInput
    seller?: UserUpdateOneRequiredWithoutProductMappingsNestedInput
    meliIntegration?: MeliIntegrationUpdateOneRequiredWithoutProductMappingsNestedInput
  }

  export type ProductMappingUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeliIntegrationCreateManyUserInput = {
    id?: string
    meliUserId: number
    meliNickname: string
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt: Date | string
    scopes?: MeliIntegrationCreatescopesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncAt?: Date | string | null
  }

  export type OrderCreateManySellerInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    supplierId?: string | null
    meliIntegrationId: string
    productMappingId?: string | null
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateManySupplierInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    sellerId: string
    meliIntegrationId: string
    productMappingId?: string | null
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductMappingCreateManySellerInput = {
    id?: string
    productId: string
    meliIntegrationId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeliIntegrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productMappings?: ProductMappingUpdateManyWithoutMeliIntegrationNestedInput
    orders?: OrderUpdateManyWithoutMeliIntegrationNestedInput
  }

  export type MeliIntegrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productMappings?: ProductMappingUncheckedUpdateManyWithoutMeliIntegrationNestedInput
    orders?: OrderUncheckedUpdateManyWithoutMeliIntegrationNestedInput
  }

  export type MeliIntegrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliUserId?: IntFieldUpdateOperationsInput | number
    meliNickname?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: MeliIntegrationUpdatescopesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    supplier?: UserUpdateOneWithoutOrdersAsSupplierNestedInput
    meliIntegration?: MeliIntegrationUpdateOneRequiredWithoutOrdersNestedInput
    productMapping?: ProductMappingUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    productMappingId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    productMappingId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    meliIntegration?: MeliIntegrationUpdateOneRequiredWithoutOrdersNestedInput
    productMapping?: ProductMappingUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    productMappingId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    productMappingId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductMappingUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductMappingsNestedInput
    meliIntegration?: MeliIntegrationUpdateOneRequiredWithoutProductMappingsNestedInput
    orders?: OrderUpdateManyWithoutProductMappingNestedInput
  }

  export type ProductMappingUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductMappingNestedInput
  }

  export type ProductMappingUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyFornecedorInput = {
    id?: string
    title: string
    description: string
    costPrice: Decimal | DecimalJsLike | number | string
    suggestedPrice?: Decimal | DecimalJsLike | number | string | null
    categoryId?: string | null
    brand?: string | null
    model?: string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku: string
    stockQuantity?: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ProductPhotoUpdateManyWithoutProductNestedInput
    productMappings?: ProductMappingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ProductPhotoUncheckedUpdateManyWithoutProductNestedInput
    productMappings?: ProductMappingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    suggestedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableJsonNullValueInput | InputJsonValue
    supplierSku?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPhotoCreateManyProductInput = {
    id?: string
    url: string
    order?: number
    isMain?: boolean
    createdAt?: Date | string
  }

  export type ProductMappingCreateManyProductInput = {
    id?: string
    sellerId: string
    meliIntegrationId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPhotoUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPhotoUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPhotoUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMappingUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutProductMappingsNestedInput
    meliIntegration?: MeliIntegrationUpdateOneRequiredWithoutProductMappingsNestedInput
    orders?: OrderUpdateManyWithoutProductMappingNestedInput
  }

  export type ProductMappingUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductMappingNestedInput
  }

  export type ProductMappingUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMappingCreateManyMeliIntegrationInput = {
    id?: string
    productId: string
    sellerId: string
    meliItemId?: string | null
    meliPermalink?: string | null
    publishedPrice?: Decimal | DecimalJsLike | number | string | null
    markupPercent?: Decimal | DecimalJsLike | number | string | null
    markupFixed?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MappingStatus
    syncError?: string | null
    lastSyncAt?: Date | string | null
    announcedStock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyMeliIntegrationInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    sellerId: string
    supplierId?: string | null
    productMappingId?: string | null
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductMappingUpdateWithoutMeliIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductMappingsNestedInput
    seller?: UserUpdateOneRequiredWithoutProductMappingsNestedInput
    orders?: OrderUpdateManyWithoutProductMappingNestedInput
  }

  export type ProductMappingUncheckedUpdateWithoutMeliIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductMappingNestedInput
  }

  export type ProductMappingUncheckedUpdateManyWithoutMeliIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    meliItemId?: NullableStringFieldUpdateOperationsInput | string | null
    meliPermalink?: NullableStringFieldUpdateOperationsInput | string | null
    publishedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    markupFixed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMappingStatusFieldUpdateOperationsInput | $Enums.MappingStatus
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcedStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutMeliIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    supplier?: UserUpdateOneWithoutOrdersAsSupplierNestedInput
    productMapping?: ProductMappingUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutMeliIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    productMappingId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUncheckedUpdateManyWithoutMeliIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    productMappingId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateManyProductMappingInput = {
    id?: string
    meliOrderId: bigint | number
    meliOrderStatus: string
    sellerId: string
    supplierId?: string | null
    meliIntegrationId: string
    buyerName?: string | null
    buyerPhone?: string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    quantity?: number
    trackingNumber?: string | null
    shippingLabel?: string | null
    internalStatus?: $Enums.OrderStatus
    orderDate: Date | string
    shippingDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUpdateWithoutProductMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    supplier?: UserUpdateOneWithoutOrdersAsSupplierNestedInput
    meliIntegration?: MeliIntegrationUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderUncheckedUpdateManyWithoutProductMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    meliOrderId?: BigIntFieldUpdateOperationsInput | bigint | number
    meliOrderStatus?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    meliIntegrationId?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingLabel?: NullableStringFieldUpdateOperationsInput | string | null
    internalStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FornecedorProfileCountOutputTypeDefaultArgs instead
     */
    export type FornecedorProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FornecedorProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeliIntegrationCountOutputTypeDefaultArgs instead
     */
    export type MeliIntegrationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeliIntegrationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductMappingCountOutputTypeDefaultArgs instead
     */
    export type ProductMappingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductMappingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FornecedorProfileDefaultArgs instead
     */
    export type FornecedorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FornecedorProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductPhotoDefaultArgs instead
     */
    export type ProductPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductPhotoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeliIntegrationDefaultArgs instead
     */
    export type MeliIntegrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeliIntegrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductMappingDefaultArgs instead
     */
    export type ProductMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductMappingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}